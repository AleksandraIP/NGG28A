let headerText = `
    <a class="page" href="main.html" id="main" style="color: rgb(35, 6, 117);">OLEKSANDRA POPOVA</a>
    <ul id="menu">
      <li><a class="page" href="about.html" style="color: rgb(35, 6, 117);" >ABOUT</a></li>
      <li><a class="page" href="projects.html" style="color: rgb(35, 6, 117);" >PROJECTS</a></li>
      <li><a class="page" href="contact.html" style="color: rgb(35, 6, 117);">CONTACT</a></li>
    </ul>
`
let footerText = `
      <div class="social">
         <p style="font-size: 30px; margin-bottom:0;">Follow me in Social Media</p>
         <a href="https://www.instagram.com/sandra_p0p0va/" style="font-size: 20px;color: rgb(35, 6, 117);">Instagram</a>
      </div>
      <div class="contact">
        <p style="font-size: 30px; margin-bottom:0;">Contact</p>
        <p style="font-size: 20px; margin-bottom:0;">079 111 11 11</p>
        <p style="font-size: 20px; margin-bottom:0;">aleksandraip@ukr.net</p>
      </div>`

function setHeader(){ 
    let header = document.createElement('header');
    header.innerHTML = headerText;    
    header.style.display = 'flex';
    header.style.justifyContent = 'space-around'; 
    header.style.fontSize = '25px';
    header.style.width = '100%';
    header.style.height = '60px';
    header.style.textAlign = 'center';
    header.style.marginTop = '20px';
    document.body.insertAdjacentElement('afterbegin', header);
}
setHeader();

document.querySelectorAll('.page').forEach((el)=> {
  if ( window.location.pathname.indexOf(el.getAttribute('href')) > -1 ) {
      el.classList.add('active');
  }
});

function setFooter(){
    let footer = document.createElement('footer');
    footer.innerHTML = footerText;
    footer.style.display = 'flex';
    footer.style.justifyContent = 'space-around';
    footer.style.width = '100%';
    footer.style.paddingTop = '10px';
    document.body.insertAdjacentElement('beforeend', footer);
}
setFooter();

