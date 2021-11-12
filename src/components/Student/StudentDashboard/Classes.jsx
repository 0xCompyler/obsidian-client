import React,{useState,useEffect} from "react";
import styled from "styled-components";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Axios from "axios";

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
			<CardContainer href={`https://meet.jit.si/${item._id}`} target="_blank">
				<div>
					<h3>{item._id}</h3>
				</div>
				<div>
					<h2>{item.credits}</h2>
					<h2><AccessTimeIcon/><span>{`${item.from}-${item.to}`}</span></h2>
				</div>
			</CardContainer>
		</>
	)
}

const Classes = () => {
	const [courses,setCourses] = useState([]);

	const nodeApiUrl = process.env.REACT_APP_NODE_API_URL;

	useEffect(() => {
		Axios.get(`${nodeApiUrl}course/getAllCourses`)
			.then((coursesResponse) => {
				console.log(coursesResponse,"course");
				Axios.get(`${nodeApiUrl}course/getDate`)
				.then((res) => {
					let upcomingClass = [];
					coursesResponse.data.response.map((course) => {
						var currentDate = new Date(res.data.response);
						if(currentDate.getHours() < course.from.substring(0,2)){
							upcomingClass.push(course);
						}
					})
					setCourses(upcomingClass);
				}).catch((err) => {
					console.log(err);
				})
			})
			.catch((err) => {
				//Todo instead add Toast
				console.log(err);
				// if (Array.isArray(err.response.data.error)) {
				// 	setErrors(err.response.data.error);
				// } else {
				// 	setErrors([{ msg: err.response.data.error }]);
				// }
			});
	},[])

	return (
		<Wrapper>
			<Heading>
				Upcoming Classes
			</Heading>
			<CardWrapper>
				{courses.map((item,index)=>(
					<Cards item={item}/>
				))}
			</CardWrapper>
		</Wrapper>
	)
}

export default Classes
