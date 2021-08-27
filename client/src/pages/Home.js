import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import hero from "../assets/images/hero.jpg";
import yapilogo from "../assets/images/yapi-logo.png";
import Auth from "../utils/auth";
import "./home.css";
import { useQuery } from "@apollo/client";

const Home = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
      <section className="hero">
        <header className="hero-header">
          <h1 className="hero-title">The title of this hero module</h1>
        </header>
        <footer className="hero-footer">
          <div className="search">
            <form>
              <input
                className="input"
                type="text"
                name="s"
                placeholder="How may we help you?"
              />
              <button type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
        </footer>
      </section>

      <section class="wrapper">
        <div class="span-third">
          <p class="placeholder">placeholder</p>
        </div>
        <div class="span-twothirds">
          <p class="sans summary justify">
            &bdquo;The history of art and art's condition at any time are pretty
            messy&ldquo; schreibt Donald Judd 1964 in einem Artikel, der sich
            der New Yorker Kunstszene widmet. Er wendet sich darin gegen
            traditionelle Unterscheidungen von Stilen und Gattungen und
            pl&auml;diert f&uuml;r eine ungezwungene Begegnung mit Kunstwerken.
            Judds Analysis einer lokalen Szene ist Augangspunkt f&uuml;r das
            Experiment. Werke aus der Friedrich Christian Flick Collection und
            der Sammlung der Nationalgalerie, erg&auml;zt durch ausgew&auml;hlte
            Leihgaben, in den Kontext ihrer Entstehung zu bringen.
          </p>
          <p class="sans summary">
            Welche Kunst war pr&auml;gend f&uuml;r Donald Judd? Was Verbindet
            Konrad Lueg, Sigmar Polke und Gerhard Richter? Welche Galerien haben
            Bruce Nauman oder Jenny Holzer in ihren fr&uuml;hen Karrierephasen
            unterst&uuml;tzt? Mintunter ungew&ouml;hnliche Werk-Aufstellungen
            liefern Momentaufnahmen aus dem New York und D&uuml;sseldorf der
            1960er- und 1970er-Jahre, dem K&ouml;ln der 1980er-, dem Berlin und
            Los Angeles der 1990er Jahre.
          </p>
          <p class="sans summary">
            Im Fr&uuml;hjahr 2019 erscheint eine Publikation zur Ausstellung.
          </p>
        </div>
        <div class="span-threefourths sans summary justify">
          <p>
            The history of art and art's condition at any time are pretty
            messy", Donald Judd wrote in 1964 in an article on the New York art
            scene. In this piece he opposed traditional differentiations of
            style and genre, advocating instead a more casual encounter with
            works of art. Judd's analysis of the local art scene is the starting
            point for an experiment that takes works from the Friedrich
            Christian Flick Collection and the Collectino of the Nationalgalerie
            &ndash; enhanced by selected loans &ndash; and resituates them
            within the context of their making.
          </p>
          <p>
            Which art influenced Donald Judd? What connects Konrad Lueg, Sigmar
            Polke and Gerhard Richter? Which galleries supported Bruce Nauman
            and Jenny Holzer during the early stages of their careers?
            Occasionally unusual work constellations provide snapshots of New
            York and D&uuml;sseldorf in the 1960s and 1970s, Cologne in the
            1980s, Berlin and Los Angeles in the 1990s.
          </p>
          <p>An exhibition catalogue will be published in spring 2019.</p>
        </div>
        <div class="span-fourth">
          <p class="placeholder">placeholder</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
