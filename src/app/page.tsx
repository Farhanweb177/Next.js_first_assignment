import Link from "next/link";

export default function Home() {
  return (
    <div className="main">
      <span><h1 className="sum">Main Page</h1></span>
      
      <ol >
        <li className="li">
         <Link href="about">About</Link> <span></span>
         <Link href="service">Service</Link> <span></span>
      <Link href="contact">Contact</Link> <span></span>
      <Link href="home">Home</Link> <span> </span>
      {/* <Link href="About/nested">Nested</Link> <span></span> */}
        </li>
      </ol>
    </div>
  );
}
