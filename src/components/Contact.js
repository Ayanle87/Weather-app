import React from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setEmail("");
  };
  const handleClick = () => {
    setShowThankYouMessage(true);
    setMessage("");
  };

  return (
    <>
      {" "}
      <div className="text-center">
        <h1>Kontakt</h1>
        <h3>Är du missnöjd med prognosen?</h3>
      </div>
      <Form className="my-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" ccontrolId="prognos">
          <Form.Label className="form-label">
            Vilken prognos har du varit missnöjd med?
          </Form.Label>
          <Form.Select aria-label="Vilken prognos har du varit missnöjd med?">
            <option value="regn">Regn när det skulle vara soligt</option>
            <option value="sol">Soligt när det skulle vara regnigt</option>
            <option value="kallt">Kallt när det skulle vara varmt</option>
            <option value="varmt">Varmt när det skulle vara kallt</option>
            <option value="slask">Slask när det skulle vara snö</option>
            <option value="Gbg">Göteborgsväder</option>
            <option value="annat">Annat </option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="meteorolog">
          <Form.Label className="form-label">
            Har du övervägt att ta kontakt med en meteorolog för att diskutera
            dina väderfrågor?
          </Form.Label>
          <Form.Check
            type="radio"
            label="Ja, jag har försökt men känner mig fortfarande missnöjd"
            name="meteorolog"
            id="radio-1"
          />
          <Form.Check
            type="radio"
            label="Nej, jag trodde inte att det fanns någon hjälp att få"
            name="meteorolog"
            id="radio-2"
          />
          <Form.Check
            type="radio"
            label="Nej, jag vill hellre klaga på internet"
            name="meteorolog"
            id="radio-3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="app">
          <Form.Label className="form-label">
            Vilken är din favoritväder-app?
          </Form.Label>
          <Form.Select aria-label="Vilken är din favoritväder-app?">
            <option value="SMHI">SMHI</option>
            <option value="Yr.no">Yr.no</option>
            <option value="AccuWeather">AccuWeather</option>
            <option value="Klart.se">Klart.se</option>
            <option value="Predicitfy">Predicitify, förstås!</option>
            <option value="inget">Jag gillar inte väderappar</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="förbättring">
          <Form.Label className="form-label">
            Vad skulle du vilja se förbättrat i din väderprognos?
          </Form.Label>
          <Form.Check
            type="checkbox"
            label="Mer exakta förutsägelser"
            id="checkbox-1"
          />
          <Form.Check
            type="checkbox"
            label="Mer optimistiska förutsägelser"
            id="checkbox-2"
          />
          <Form.Check type="checkbox" label="Mer sol,tack!" id="checkbox-3" />
        </Form.Group>
        <div className="needs-validation">
          <Form.Group
            className="form-group was-validated mb-3"
            controlId="email"
          >
            <Form.Label className="email">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Skriv email"
              id="form-control"
              required
              className="is-valid"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Meddelande</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Skriv ditt meddelande här"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Form.Group>
        </div>

        <Button
          type="submit"
          onClick={handleClick}
          style={{ width: "100px", padding: "4px" }}
        >
          Skicka
        </Button>
        {showThankYouMessage && (
          <div className="text-center">
            <h2>Tack för ditt meddelande!</h2>
          </div>
        )}
      </Form>
    </>
  );
}

export default Contact;
