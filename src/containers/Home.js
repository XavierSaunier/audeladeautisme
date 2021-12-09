import { useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import logo from "../images/logo_asso.png";
import caffe1 from "../images/café_autisme1.jpg";
import caffe2 from "../images/café_autisme2.jpg";

const Home = () => {
  const [control, setControl] = useState("welcome");

  return (
    <div className="General">
      <div className="Home">
        <div className="Header">
          <img alt="logo-asso" src={logo} />
          <div>
            <h3>Au delà de l'autisme</h3>
          </div>
        </div>

        <div className="Body">
          <div className="ControlPannel">
            <h1>Rubriques</h1>
            <button
              className={control === "welcome" ? "checked" : "unchecked"}
              onClick={() => {
                setControl("welcome");
              }}
            >
              Bienvenue
            </button>
            <button
              className={control === "caffe" ? "checked" : "unchecked"}
              onClick={() => {
                setControl("caffe");
              }}
            >
              Café autisme
            </button>
            <button
              className={control === "activities" ? "checked" : "unchecked"}
              onClick={() => {
                setControl("activities");
              }}
            >
              Pair-aidance
            </button>
          </div>

          <div className="content">
            {control === "welcome" && (
              <div>
                <div className="Info">
                  <h1>Info</h1>
                  <p>
                    Bienvenue sur le site de l'association : Au delà de
                    l'autisme. Notre but est de créer un réseau d'entraide et de
                    soutien pour les personnes autistes, ainsi que leurs
                    proches. Nous sommes basés à Epernon (28230), une petite
                    ville d'Eure-et-Loir à la frontière des Yvelines. C'est là
                    que vous nous trouverez pour notre café autisme. Mais nous
                    faisons également des ateliers en ligne. <br /> Pour en
                    savoir plus sur nos diverses actions, rendez-vous sur ce
                    site ou sur notre page Facebook: Au delà de l'autisme.
                    N'hésitez pas à partager ces ressources aux personnes
                    concernées. Nous espérons vous voir très vite à l'un de nos
                    cafés ou ateliers.
                  </p>
                </div>
                <div className="Info">
                  <h1>Agenda</h1>

                  <ul>
                    <li>
                      Samedi 11 décembre, 15h-17h : télé-atelier de
                      pair-aidance, les relations de couple.
                    </li>
                    <li>Mardi 14 décembre 2021, 17h-19h : café autisme</li>
                  </ul>
                </div>
              </div>
            )}
            {control === "caffe" && (
              <div className="Info">
                <h1>Café autisme</h1>
                <p>
                  Le café autisme est un lieu qui permet aux personnes autistes
                  et non-autistes de se rencontrer. C'est un espace adapté au
                  mode de fonctionnement autiste ; par exemple, un guide de
                  discussion avec les personnes autistes y est distribué aux
                  non-autistes.
                  <br />
                  Le café permet aux personnes autistes de socialiser avec des
                  personnes proches de chez elles ; et aux personnes
                  non-autistes, soit de mieux connaitre ce trouble, soit d'en
                  apprendre plus sur un sujet qui les passionne et qui serait
                  l'intérêt spécifique d'une des personnes autistes présentes.
                  <br /> Pour l'instant, le café est réservé aux personnes de
                  plus de 13 ans. Il se déroule à Epernon, au bar Chez Manue (52
                  Place de la Gare, 28230 Epernon), un mardi sur deux, de 17h à
                  19h. Pour les dates précises, voir l'agenda sur la page
                  d'accueil.
                </p>
                <div className="Pictures">
                  <img alt="picture1" src={caffe1} />
                  <img alt="picture2" src={caffe2} />
                </div>
              </div>
            )}
            {control === "activities" && (
              <div className="Info">
                <h1>Télé-ateliers de pair-aidance</h1>
                <p>
                  Les ateliers de pair-aidance en ligne sont ouverts aux
                  personnes autistes et à leurs proches, qui souhaitent
                  améliorer leurs relations de couple ou leur quotidien par
                  rapport à l'autisme. Les personnes connectées à la session
                  partagent des astuces, soit que leur ont données des
                  professionels, soit qu'elles ont mises en place elles-mêmes de
                  part leur expérience.
                  <br />
                  Il n'y a pas besoin d'avoir été diagnostiqué par un
                  professionnel pour particper, cependant il est demandé de
                  préciser avant chaque intervention, si vous avez été
                  officiellement diagnostiqué, si vous êtes en questionnement,
                  ou si vous êtes un proche non autiste.
                  <br /> Pour l'instant, aucun professionel ne sera présent,
                  nous ne pourrons donc pas donner de conseils d'ordre
                  professionnel (par exemple, personne n'y sera habilité à vous
                  dire si tel ou tel symptome est plutôt dû à l 'autisme ou à un
                  autre trouble, comme une dépression ou de l'anxiété, ou
                  autre).
                  <br /> Les séances ont lieu le samedi, de 15h à 17h (pour les
                  dates exactes, voir l'agenda en page d'accueil). Le lien de la
                  vidéo conférence sera disponible 15 min avant, sur la page
                  facebook ou par mail pour les personnes qui se seront
                  inscrites au préalable à l'adresse mail
                  audeladeaustisme@gmail.com.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <footer>
        <p> Ce site est propriété de l'association Au delà de l'autisme</p>
        <a href="mailto:audeladeautisme@gmail.com">
          audeladeaustisme@gmail.com
        </a>
        <a href="https://www.facebook.com/Au-del%C3%A0-de-lautisme-106152798535467/">
          Retrouvez nous sur Facebook
        </a>
      </footer>
    </div>
  );
};

export default Home;
