import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";




const Footer = () =>{
    return <>
            <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="https://www.instagram.com/i.am.himanshukansal/" target="_blank" className="nav-link px-2 text-body-secondary insta"><FaInstagram/></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary fb"><FaFacebook/></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary linkedin"><FaLinkedin/></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary github"><FaGithub/></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary leet"><SiLeetcode/></a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary gfg"><SiGeeksforgeeks/></a></li>

    </ul>
                <p className="text-center text-body-secondary" style={{textAlign: "center"}}>
                        <ul style={{ listStyleType: 'none' }}>
                              <li><b>himanshukansal.co.in</b></li>
                              <li><b>Mobile No:</b> 8595893159</li>
                              <li><b>Email:</b> himanshukansal101@gmail.com</li>
                        </ul>
                </p>
  </footer>
        </>
}

export default Footer;