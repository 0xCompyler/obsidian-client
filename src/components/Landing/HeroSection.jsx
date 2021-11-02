import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	padding: 0 6rem;
	// padding-right:0;
	height: 65vh;
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
`

const HeroSection = () => {
	return (
		<Wrapper>
			Obsidian ™👍
		</Wrapper>
	)
}

export default HeroSection
