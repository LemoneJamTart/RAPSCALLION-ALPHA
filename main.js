document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('#startbutton')
  var input = document.querySelector('#name-input')
  var content = document.querySelector('#content')
  button.addEventListener('click', function() {
    content.innerHTML = `
      <h1>EXPLANATION OF CIRCUMSTANCES<h1>
      <p>In a plane far removed from our own, dimensions away, there exists a planet rich in magic.
      It suffuses all matter, all that lives and dies and more besides. This planet, called by many
      different names across its surface, is known by most as "Anaht", and it is home to wonders
      unknown to us, and indistinguishable from our fanciful stories of aliens and fairies alike.
      You, my dear, have been reborn here, in Anaht- and what's more, you have been reborn as an
      individual able to tap into their innate magical essence and flow: you are a Weaver.</p>
      <p>You are not destined for greatness, nor to slay some great evil. You are no hero,
      nor villain, nor any more or less than others of your ability. What you are capable of,
      however, is something only you know, something only you can determine. Tell me, Weaver...
      We know your name, but not your race; for in Anaht, many species besides humans exist
      within the bounds of culture and society.</p>
      <button id = "race1">Human</button>
      <button id = "race2">Elf</button>
      <button id = "race3">Orc</button>
      <button id = "race4">Dwarf</button>
      <button id = "race5">Gnome</button>
      <button id = "race6">Halfling</button>
      <button id = "race7">Socialis</button>
      <button id = "race8">Tiefling</button>
      <button id = "race9">Aasimar</button>
      <button id = "race10">Genasi</button>
      <button id = "race11">Triton</button>
      <button id = "race12">Harpy</button>
    `
  })
})
