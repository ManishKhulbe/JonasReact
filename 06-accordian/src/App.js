import "./styles.css";
import {useState} from 'react'

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null)

  function toggleAcc(current) {
    if(currOpen===current)setCurrOpen(null)
    else setCurrOpen(current);
  }
  
  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem num={i + 1} title={faq.title} text={faq.text} />
      ))}
      <hr></hr>
      {data.map((faq, i) => (
        <AccordionItemV2
          num={i + 1}
          title={faq.title}
          text={faq.text}
          onToggle={toggleAcc}
          currOpen={currOpen}
        >
          {faq.text}
        </AccordionItemV2>
      ))}
    </div>
  );
}
function AccordionItem({ num, title, text }) {
  const [isShow, setIsShow] = useState(false)

  function handleToggle() {
      setIsShow((isShow) => !isShow);
  }
  return (
    <div className={`item ${isShow ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      <p className="icon">{isShow ? "-" : "+"}</p>
      {isShow ? <div className="content-box">{text}</div> : ""}
    </div>
  );
}

function AccordionItemV2({ num, title, children, onToggle, currOpen }) {
  return (
    <div
      className={`item ${currOpen === num ? "open" : ""}`}
      onClick={() => onToggle(num)}
    >
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      <p className="icon">{currOpen === num ? "-" : "+"}</p>
      {currOpen === num ? <div className="content-box">{children}</div> : ""}
    </div>
  );
}
