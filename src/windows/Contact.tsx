import WindowControls from "#components/WindowControls";
import { socials } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = (): React.ReactNode => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact</h2>
      </div>
      <div className="p-5 space-y-6">
        <img
          src="/images/nikhil.jpg"
          alt="contact"
          className="w-24 rounded-full"
        />
        <h3>Let's Connect</h3>
        <p>Got a role for me? Feel free to reach out to me on any of the platforms below.</p>
        <ul>
          {socials.map((social) => (
            <li key={social.id} style={{ backgroundColor: social.bg }}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.text} className="size-5" />
                <p>{social.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
