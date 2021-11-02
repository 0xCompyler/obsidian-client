import React, { useState } from "react";
import styled from "styled-components";
import { LazyMotion, domAnimation, m } from "framer-motion"
import Loading from "@elements/Default/Loading";
import CreditsSection from "./CreditsSection";
import TimeSpanSection from "./TimeSpanSection";
import DateSection from "./DateSection";

const Btn = styled(m.a)`
	width: 75%;
	display: grid;
	place-items: center;
	font-family: var(--font-family);
	font-size: 1rem;
	font-weight: 700;
	padding: 0.75rem 1.25rem;
	border-radius: 1000rem;
	background: var(--app-theme-primary);
	color: var(--app-text);
	outline: none;
	border: none;
	cursor: pointer;
	user-select:none;
	transition: background 0.2s ease;
	&[disabled] {
		background: var(--app-theme-primary-disabled);
		pointer-events: none;
	}
`

const Group = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	gap: 2rem;
`

const Wrapper = styled.div`
	display:flex;
	flex-direction: column;
	align-items:center;
	gap:1rem;
`

const AnimBtn = ({ children, onClick,disabled }) => (
	<Btn
		whileTap={{
			scale:0.97
		}}
		onClick={onClick}
		disabled={disabled}
	>{children}</Btn>
)

const RightSection = () => {
	const [buttonText, setButtonText] = useState("Create Course")
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleClick = () => {
		localStorage.removeItem("properties")
		setButtonText(<Loading/>)
		setIsSubmitting(true)
		setButtonText("Create Course")
		setTimeout(() => {
			setIsSubmitting(false)
		}, 1000);
	}

	return (
		<Wrapper>
			<Group>
				<CreditsSection/>
				<DateSection/>
				<TimeSpanSection/>
			</Group>
			<LazyMotion features={domAnimation}>
				<AnimBtn disabled={(isSubmitting)?true:false} onClick={handleClick}>{buttonText}</AnimBtn>
			</LazyMotion>
		</Wrapper>
	)
}

export default RightSection
