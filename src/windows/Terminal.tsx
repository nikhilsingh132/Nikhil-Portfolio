import WindowControls from "#components/WindowControls";
import { techStack } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";

const Terminal = (): React.ReactNode => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech stack</h2>
      </div>
      <div className="techstack">
        <p>
          <span>@nikhil % ~ </span>
          show tech stack
        </p>
        <div className="label">
          <p className="w-32 ">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map((item) => (
            <li key={item.category} className="flex">
              <Check className="check" size={20} />
              <h3>{item.category}</h3>
              <ul>
                {item.items.map((tech, index) => (
                  <li key={tech}>
                    {tech}
                    {index < item.items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check size={20} />5 of 5 stacks are loaded successfully(100%)
          </p>
          <p className="text-black">
            <Flag size={16} fill="black" />
            Render time: 3ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
