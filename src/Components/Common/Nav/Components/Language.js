import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Languages from '../Data/Languages.json';
import { useTranslation } from 'react-i18next';

import EN from '../../../../Assets/Icons/Languages/en.png'
import VI from '../../../../Assets/Icons/Languages/vi.png'

function Language() {

    const countries = [ EN, VI ]
    const { i18n } = useTranslation();
    const location = useLocation();
  
    return (
 
        Languages.map( Language => {
            return (
                <li key={Language.id} className="nav_lists_mobile">
                  <Link className="nav_links_mobile" to={location} onClick={() => i18n.changeLanguage(Language.id)}>
                    <img className="languages" src={countries[Language.flag - 1]} />
                    {Language.name}
                  </Link>
                  
                </li>
            )
        } )
    );
  }
  
  export default Language;