import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiTypescript, SiFirebase, SiMongodb } from 'react-icons/si';
import { DiGoogleCloudPlatform } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';

export default function Personal() {
	return (
        <div className="container-fluid bg-light text-center p-4">
            <div className="d-inline-block display-4 m-4"><FaNodeJs /></div>
            <div className="d-inline-block display-4 m-4"><SiExpress /></div>
            <div className="d-inline-block display-4 m-4"><SiJavascript /></div>
            <div className="d-inline-block display-4 m-4"><SiTypescript /></div>
            <div className="d-inline-block display-4 m-4"><SiFirebase /></div>
            <div className="d-inline-block display-4 m-4"><SiMongodb /></div>
            <div className="d-inline-block display-4 m-4"><DiGoogleCloudPlatform /></div>
            <div className="d-inline-block display-4 m-4"><FaAws /></div>
        </div>
	);
};
