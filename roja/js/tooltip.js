const button = document.querySelector('#fullwiev');
const tooltip = document.querySelector('#tooltip');
// Pass the button, the tooltip, and some options, and Popper will do the
// magic positioning for you:
/*   Popper.createPopper(button, tooltip, {
  placement: 'right',
}); */
Popper.createPopper(button, tooltip, {
  placement: 'left',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 10],
      },
    },
  ],
});
setTimeout(show_tooltip, 3000)
setTimeout(hide_tooltip, 12000)
function show_tooltip() {document.getElementById("tooltip").style.opacity = 100;}
function hide_tooltip() {document.getElementById("tooltip").style.opacity = 0;}