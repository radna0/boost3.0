import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Languages from '../Data/Languages.json';
import { useTranslation } from 'react-i18next';
function Language() {


    const { i18n } = useTranslation();
    const location = useLocation();
  
    return (
 
        Languages.map( Language => {
            return (
                <li key={Language.id} className="nav_lists_mobile">
                  <Link className="nav_links_mobile" to={location} onClick={() => i18n.changeLanguage(Language.id)}>
                    <img className="languages" src={`Assets/Icons/Languages/${Language.id}.png`} />
                    {Language.name}
                  </Link>
                  
                </li>
            )
        } )
    );
  }
  
  export default Language;