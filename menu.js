var meny = Meny.create({
// The element that will be animated in from off screen
menuElement: document.querySelector('.meny'),

// The contents that gets pushed aside while Meny is active
contentsElement: document.querySelector('.contents'),

// The alignment of the menu (top/right/bottom/left)
position: 'left',

// The height of the menu (when using top/bottom position)
height: 200,

// The width of the menu (when using left/right position)
width: 260,

// The angle at which the contents will rotate to.
angle: 30,

// The mouse distance from menu position which can trigger menu to open.
threshold: 40,

// Width(in px) of the thin line you see on screen when menu is in closed position.
overlap: 6,

// The total time taken by menu animation.
transitionDuration: '0.5s',

// Transition style for menu animations
transitionEasing: 'ease',

// Gradient overlay for the contents
gradient: 'rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.65) 100%)',

// Use mouse movement to automatically open/close
mouse: true,

// Use touch swipe events to open/close
touch: true
});