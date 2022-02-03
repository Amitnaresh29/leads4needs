import React from 'react';
import './Resume1.css';

export default function Resume1() {
  return <>
 <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/app.css" />
 
    <div class="container">
      <header id="header">
        <div id="profile-pic">
          <img src="./img/girl.png" alt="profile pic" />
        </div>
        <div id="profile-details">
          <div id="details">
            <h1>Kate Smith</h1>
            <h3>Sales Manager</h3>
            <ul>
              <li>(555)555-5555</li>
              <li>katesmith@gmail.com</li>
            </ul>
          </div>
        </div>
      </header>
      <div class="clr"></div>
      <main id="main">
        <section id="work-history">
          <h2>Work History</h2>

          <article class="work">
            <h3>Sales Manager(2015 &gt; Present)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              maxime officiis temporibus iste ex quaerat hic dolorem officia
              aliquam magni? Assumenda repudiandae, aliquid consequuntur nisi
              perferendis quia, doloremque itaque excepturi consequatur tempora
              odit illum saepe neque ipsa fugit necessitatibus suscipit labore
              commodi alias quisquam minima earum
            </p>
          </article>

          <article class="work">
            <h3>Marketing Specialist(2008 &gt; 2015)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              maxime officiis temporibus iste ex quaerat hic dolorem officia
              aliquam magni? Assumenda repudiandae, aliquid consequuntur nisi
              perferendis quia, doloremque itaque excepturi consequatur tempora
              odit illum saepe neque ipsa fugit necessitatibus suscipit labore
              commodi alias quisquam minima earum
            </p>
          </article>
          <article class="work">
            <h3>Manager Assistant (2001 &gt; 2008)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              veniam adipisci necessitatibus quia quisquam? Eligendi vitae quia
              totam accusantium officiis!
            </p>
          </article>
        </section>

        <section id="education">
          <h2>Education</h2>

          <article class="school">
            <h3>Desgin University(1998 &gt; 2001)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              maxime
            </p>
          </article>

          <article class="school">
            <h3>Some College(1997)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              maxime
            </p>
          </article>
        </section>
      </main>

      <aside id="sidebar">
        <section id="work-experience">
          <h2>Volunteering Experience</h2>

          <article class="experience">
            <h3>Ipsum Organization</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              maxime officiis temporibus iste ex quaerat hic dolorem officia
              aliquam magni? Assumenda repudiandae, aliquid consequuntur nisi
              perferendis quia, doloremque itaque excepturi consequatur tempora
              odit illum saepe neque ipsa fugit necessitatibus suscipit labore
              commodi alias quisquam minima earum
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              assumenda!
            </p>
          </article>
        </section>

        <section id="hobbies">
          <h2>Hobbies</h2>

          <ul>
            <li>Marathon Running</li>
            <li>Traveling</li>
            <li>Painting</li>
            <li>Blog Writing</li>
            <li>Reading</li>
          </ul>
        </section>
      </aside>
      <div class="clr"></div>
    </div>
    </> ;
};
