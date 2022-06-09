import React from "react";
import Selfie from "../assets/images/selfie.png"

export default function About() {
  return (
    <div>
      <section>
        <img
          id="me"
          src={Selfie}
          alt="profile photo of Sarah"
        />
        <h1>Sarah Attar</h1>
        <div id="about-me">
          <p>
            I have one dog, I love the beach and I am very free spirted. I
            learned that resources are vital to success. So I embarked on a
            journey of learning different cultures and building both my network
            and capital. I am a 23 years old who currently lives in Winter Park
            FL. After accomplishing a Guinness World Record and training for the
            Olympics in my youth I decided to take a break from training. I then
            started day trading where I was first exposed to code. Helping
            someone build an algorithm allowed me to see just how illimitable
            coding really is. The next step was to start building a solid
            substratum for my coding knowledge. I decided that my local UCF Boot
            Camp was the way to start due to their meritorious programs
            available.
          </p>
        </div>
      </section>
    </div>
  );
}
