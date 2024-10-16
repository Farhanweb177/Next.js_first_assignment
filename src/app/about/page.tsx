import Link from "next/link";

function About (){
    return(
        <div>
        <h1 className="abo">this is about page</h1>
        <Link href="about/nested" className="lin">nested page</Link>
        </div>
        
    )
}
export default About;