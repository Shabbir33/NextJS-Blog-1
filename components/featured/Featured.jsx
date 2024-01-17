import React from "react";
import style from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        <b>Hey, Shabbir Poonawala here!</b> Welcome to my Dev Blog.
      </h1>
      <div className={style.post}>
        <div className={style.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={style.image} />
        </div>
        <div className={style.textContainer}>
          <h1 className={style.postTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eleifend velit ut ante tincidunt aliquet.{" "}
          </h1>
          <p className={style.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eleifend velit ut ante tincidunt aliquet. Sed non egestas nibh.
            Integer sed sapien auctor, euismod massa sed, pharetra velit.
            Praesent facilisis, justo eget fermentum ullamcorper, neque dolor
            sollicitudin massa, ut porta magna eros vitae metus. Aliquam vel dui
            massa. In id cursus ligula. Praesent ante lectus, aliquam quis
            fermentum vitae, porta at arcu. Duis pretium nec nulla ac ultrices.
            Suspendisse erat ligula, fringilla at semper quis, euismod et
            lectus. Proin non eros orci. Nulla tristique quis eros eu porta.
            Phasellus bibendum pellentesque urna vitae sagittis. Duis egestas
            lacus vitae tellus tempor auctor faucibus id nibh. Maecenas rutrum
            placerat urna, a congue nisi auctor vitae. Maecenas felis nisi,
            porta a ligula vitae, posuere bibendum ipsum. Quisque scelerisque
            magna et erat malesuada interdum.
          </p>
          <button className={style.button}>Read More...</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
