import React, { Component } from "react";
import "./intro.css";
class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        {this.props.step === 0 && (
          <div className={`Intro__content step${this.props.step}`}>
            <div className="Intro__content__text">
              <p>
                Willkommen zu <i>Kleiderspende Köln</i>, der Seite auf der du
                alle Möglichkeiten in Köln findest, um deine alten Klamotten
                abzugeben !{" "}
              </p>
              <p>
                Wenn du zum ersten Mal hier bist kannst du dir jetzt alles
                erklären lassen. Ansonsten schließe das Intro und lege sofort
                los! *
              </p>
            </div>
            <button
              className="Intro__content__closeBtn"
              title="Intro schließen"
              onClick={this.props.dismissHandler}
            >
              &times;
            </button>
            <div>
              {" "}
              <button
                className="Intro__content__extraCloseBtn"
                onClick={this.props.dismissHandler}
              >
                Langweilig! Intro schließen!
              </button>{" "}
              <button
                className="Intro__content__nextBtn"
                onClick={this.props.nextHandler}
              >
                Cool, erklär mir die Seite!
              </button>
            </div>

            <small className="Intro__content_note">
              *das Intro wird dir auf diesem Gerät nicht wieder automatisch
              angezeigt werden
            </small>
          </div>
        )}

        {this.props.step === 1 && (
          <div className={`Intro__content step${this.props.step}`}>
            <div className="Intro__content__text">
              <span>{`Schritt ${this.props.step}/3`}</span>
              <p>
                In der Leiste oben kannst du einen Ort eingeben, an dem du
                suchen willst. Also einen Stadtteil oder ein Veedel, z.B.:
                "Altstadt" oder "Nippes"
              </p>
              <p>
                Mit den Buttons daneben kannst du auswählen, welche
                Möglichkeiten zur Abgabe deiner alten Kleider dir angezeigt
                werden.*
              </p>
            </div>
            <button
              className="Intro__content__closeBtn"
              title="Intro schließen"
              onClick={this.props.dismissHandler}
            >
              &times;
            </button>
            <button
              className="Intro__content__nextBtn"
              onClick={this.props.nextHandler}
            >
              Ok Weiter
            </button>
            <button
              className="Intro__content__prevBtn"
              onClick={this.props.prevHandler}
            >
              {"< Zurück"}
            </button>
            <small className="Intro__content_note">
              *standardmäßig sind Altkleidercontainer nicht angewählt, da bei
              man bei diesen nie sicher sein kann, ob die Kleider wirklich einem
              guten Zweck dienen.
            </small>
          </div>
        )}

        {this.props.step === 2 && (
          <div className={`Intro__content step${this.props.step}`}>
            <div className="Intro__content__text">
              <span>{`Schritt ${this.props.step}/3`}</span>
              <p>
                Hast du deine Suche mit <i>Enter</i> gestartet, dann werden
                rechts die Ergebnisse mit einigen Details aufgelistet.
              </p>
            </div>
            <button
              className="Intro__content__closeBtn"
              title="Intro schließen"
              onClick={this.props.dismissHandler}
            >
              &times;
            </button>
            <button
              className="Intro__content__nextBtn"
              onClick={this.props.nextHandler}
            >
              Ok Weiter
            </button>
            <button
              className="Intro__content__prevBtn"
              onClick={this.props.prevHandler}
            >
              {"< Zurück"}
            </button>
          </div>
        )}

        {this.props.step === 3 && (
          <div className={`Intro__content step${this.props.step}`}>
            <div className="Intro__content__text">
              <span>{`Schritt ${this.props.step}/3`}</span>
              <p>
                Auf der Karte kannst du die Standorte der Ergebnisse sehen und
                durch klicken auf einen Pin die Details einblenden.
              </p>
              <p>
                Du kannst auch mit Hilfe der Karte in einem Radius suchen, indem
                du auf die Karte (aber nicht auf einen Pin) klickst.
              </p>
            </div>{" "}
            <button
              className="Intro__content__closeBtn"
              title="Intro schließen"
              onClick={this.props.dismissHandler}
            >
              &times;
            </button>
            <button
              className="Intro__content__nextBtn"
              onClick={this.props.nextHandler}
            >
              Cool! Los geht's!
            </button>
            <button
              className="Intro__content__prevBtn"
              onClick={this.props.prevHandler}
            >
              {"< Zurück"}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Intro;
