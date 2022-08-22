import React from "react";
import main2 from "../../assets/photos/main2.jpg";
import {
	Main2Container,
	LeftWrap,
	RightWrap,
	MainH1,
	MainP,
	MainBtnWrap,
	MainBtnRoute,
} from "./Main2Elements";



const Main2 = () => {
	return (
		<Main2Container>
			<LeftWrap>
				<img className="main2" src={main2} />
			</LeftWrap>
			<RightWrap>
				<MainH1>Improve Your Skills</MainH1>
				<ul className="ul">
                    <li className="li">Learn new recipes</li>
                    <li className="li">Experiment with food</li>
                    <li className="li">Write your own recipes</li>
                    <li className="li">Know nutrition facts</li>
                    <li className="li">Receive cooking tips</li>
                    <li className="li">Get ranked among your peers</li>
                </ul>
				<MainBtnWrap>
					<MainBtnRoute to='/'>Sign Up Now</MainBtnRoute>
				</MainBtnWrap>
			</RightWrap>
		</Main2Container>
	);
};

export default Main2;
