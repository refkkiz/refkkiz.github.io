document.addEventListener('DOMContentLoaded', fetch_projects);

async function fetch_projects() {
    const username = 'refkkiz';
    const url = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(url);
        const projects = await response.json();
        const table = document.querySelector('#table tbody');
        table.innerHTML = projects.map(project => `
            <tr>
                <td>${project.name}</td>
                <td>${project.description || 'No Description'}</td>
                <td><a href="${project.html_url}" target="_blank">View on GitHub</a></td>
            </tr>
        `).join('');

        document.getElementById('filter').addEventListener('input', filter_projects);
        document.getElementById('sort').addEventListener('change', sort_projects);
    } catch (error) {
        console.error('Error fetch_projectsing projects:', error);
    }
}

function filter_projects() {
    const value = this.value.toLowerCase();
    document.querySelectorAll('#table tbody tr').forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(value) ? '' : 'none';
    });
}

function sort_projects() {
    const sort = this.value === 'name' ? 0 : 1;
    const rows = Array.from(document.querySelectorAll('#table tbody tr'));
    rows.sort((a, b) => a.cells[sort].textContent.localeCompare(b.cells[sort].textContent));
    const table = document.querySelector('#table tbody');
    table.append(...rows);
}
