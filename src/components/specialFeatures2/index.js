import React from "react";
import Card1 from "../../assets/photos/grid1.jpg";
import Card2 from "../../assets/photos/grid2.jpg";
import Card3 from "../../assets/photos/grid3.jpg";
import Card4 from "../../assets/photos/grid4.jpg";
import Card5 from "../../assets/photos/grid5.jpg";
import Card6 from "../../assets/photos/grid6.jpg";
import Card7 from "../../assets/photos/grid7.jpg";
import Card8 from "../../assets/photos/grid8.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
	CardContainer,
	TopRow,
	BottomRow,
	Card,
    Content,
    Header
} from "./specialFeatures2Elements";

const SpecialFeatures2 = () => {
	return (
		<CardContainer>
            <Header>Special Features</Header>
			<TopRow>
				<Card>
					<img className='SFimg' src={Card1} />
					<Content>
						<h3 className='SFheader'>Skirt Steak Pasta</h3>
						<p className="SFauthor">By Lina Sukowati</p>
						<p className="SFtime">
							<AiOutlineClockCircle />9 Minutes
						</p>
					</Content>
				</Card>
				<Card>
					<img className='SFimg' src={Card2} />
					<Content>
						<h3 className='SFheader'>Poached Eggs</h3>
						<p className="SFauthor">By Denise Gonzaga</p>
						<p className="SFtime">
							<AiOutlineClockCircle />7 Minutes
						</p>
					</Content>
				</Card>
                <Card>
					<img className='SFimg' src={Card3} />
					<Content>
						<h3 className='SFheader'>Italiano Pepperoni Pizza</h3>
						<p className="SFauthor">By Marcus McWhorter</p>
						<p className="SFtime">
							<AiOutlineClockCircle />22 Minutes
						</p>
					</Content>
				</Card>
                <Card>
					<img className='SFimg' src={Card4} />
					<Content>
						<h3 className='SFheader'>Cilantro Lime Tacos</h3>
						<p className="SFauthor">By Dominic Bindley</p>
						<p className="SFtime">
							<AiOutlineClockCircle />19 Minutes
						</p>
					</Content>
				</Card>
			</TopRow>
			<BottomRow>
            <Card>
					<img className='SFimg' src={Card5} />
					<Content>
						<h3 className='SFheader'>Mediterranean Salad</h3>
						<p className="SFauthor">By Ryan Joyce</p>
						<p className="SFtime">
							<AiOutlineClockCircle />7 Minutes
						</p>
					</Content>
				</Card>
				<Card>
					<img className='SFimg' src={Card6} />
					<Content>
						<h3 className='SFheader'>Grilled Angus Burger</h3>
						<p className="SFauthor">By Mary Panganiban</p>
						<p className="SFtime">
							<AiOutlineClockCircle />25 Minutes
						</p>
					</Content>
				</Card>
                <Card>
					<img className='SFimg' src={Card7} />
					<Content>
						<h3 className='SFheader'>Sushi Roll</h3>
						<p className="SFauthor">By Link & Zelda</p>
						<p className="SFtime">
							<AiOutlineClockCircle />14 Minutes
						</p>
					</Content>
				</Card>
                <Card>
					<img className='SFimg' src={Card8} />
					<Content>
						<h3 className='SFheader'>Garden Prawn Salad</h3>
						<p className="SFauthor">By Peter Pan</p>
						<p className="SFtime">
							<AiOutlineClockCircle />12 Minutes
						</p>
					</Content>
				</Card>
            </BottomRow>
		</CardContainer>
	);
};

export default SpecialFeatures2;
