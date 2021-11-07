import React from "react";
import styled from "styled-components";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 2rem;
`

const Heading = styled.h1`
	flex: 1;
	font-size: 1.5rem !important;
	font-weight: 900;
	color: #d6d6d6;
	padding-bottom: 2rem;
`

const CardContainer = styled.a`
	flex:1;
	display: flex;
	align-items:center;
	justify-content:space-between;
	padding: 1.75rem;
	background: var(--app-container-bg-primary);
	border-radius: 0.5rem;
	gap: 1rem;
	min-width: 30%;
	max-width: 30%;
	cursor: pointer;
	color: inherit;
	& > div{
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	h3{
		font-weight: 900;
		font-size: 1.5rem;
	}
	h2{
		display: flex;
		align-items:center;
		font-weight: 700;
		font-size: 1rem;
		svg{
			font-size: 1rem;
		}
		span{
			margin-left: 0.25rem;
		}
	}
	p{
		display: flex;
		align-items:center;
		font-weight: 500;
		font-size: 1rem;
		margin-bottom: 0;
		svg{
			font-size: 1.25rem;
		}
		span{
			margin-left: 0.25rem;
		}
	}
`

const CardWrapper = styled.div`
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
`

const Cards = (props) => {
	const { item } = props;
	return (
		<>
			<CardContainer href={item.link} >
				<div>
					<h3>{item.title}</h3>
				</div>
				<div>
					<h2>{item.date}</h2>
					<h2><AccessTimeIcon/><span>{item.time}</span></h2>
				</div>
			</CardContainer>
		</>
	)
}

const Classes = () => {
	const classInfo = [{
		"title":"Class 1",
		"date":"01/01/21",
		"time":"12:00",
		"link":"https://google.com",
	},{
		"title":"Class 2",
		"date":"01/01/21",
		"time":"12:00",
		"link":"https://google.com",
	},{
		"title":"Class 3",
		"date":"01/01/21",
		"time":"12:00",
		"link":"https://google.com",
	},{
		"title":"Class 4",
		"date":"01/01/21",
		"time":"12:00",
		"link":"https://google.com",
	}]
	return (
		<Wrapper>
			<Heading>
				Upcoming Classes
			</Heading>
			<CardWrapper>
				{classInfo.map((item,index)=>(
					<Cards item={item}/>
				))}
			</CardWrapper>
		</Wrapper>
	)
}

export default Classes
