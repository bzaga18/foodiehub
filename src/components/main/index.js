import React from "react";
import {
	MainContainer,
	LeftWrap,
	RightWrap,
	MainH1,
	MainP,
	MainBtnWrap,
	MainBtnRoute,
	GridWrapper,
} from "./MainElements";
import Grid1 from "../../assets/photos/grid1.jpg";
import Grid2 from "../../assets/photos/grid2.jpg";
import Grid3 from "../../assets/photos/grid3.jpg";
import Grid4 from "../../assets/photos/grid4.jpg";
import Grid5 from "../../assets/photos/grid5.jpg";
import Grid6 from "../../assets/photos/grid6.jpg";
import Grid7 from "../../assets/photos/grid7.jpg";
import Grid8 from "../../assets/photos/grid8.jpg";
import Grid9 from "../../assets/photos/grid9.jpg";

const Main = () => {
	return (
		<MainContainer>
			<LeftWrap>
				<MainH1>What Are We About?</MainH1>
				<MainP>
					FoodieHub is a place where you can please your soul and
					tummy with delicious food recipies of all cuisine. And our
					service is absolutely free. So start exploring now.
				</MainP>
				<MainBtnWrap>
					<MainBtnRoute to='/'>Explore Now</MainBtnRoute>
				</MainBtnWrap>
			</LeftWrap>
			<RightWrap>
				<img className='grid' src={Grid1} alt='grid1' />
				<img className='grid' src={Grid2} alt='grid1' />
				<img className='grid' src={Grid3} alt='grid1' />
				<img className='grid' src={Grid4} alt='grid1' />
				<img className='grid' src={Grid5} alt='grid1' />
				<img className='grid' src={Grid6} alt='grid1' />
			</RightWrap>
		</MainContainer>
	);
};

export default Main;
