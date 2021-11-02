import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
	background: transparent;
	fill: ${props=>props.selected?`var(--app-text)`:`currentColor`};
	stroke: currentColor;
    stroke-width: 0.25px;
    stroke-linecap: round;
    stroke-linejoin: round;
	transition: fill 0.25s ease;
`

const SearchIcon = ({ selected }) => {
	return (
		<SVG xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" selected={selected}>
			<path fillRule="evenodd" d="M16.3198574,14.9056439 L21.7071068,20.2928932 L20.2928932,21.7071068 L14.9056439,16.3198574 C13.5509601,17.3729184 11.8487115,18 10,18 C5.581722,18 2,14.418278 2,10 C2,5.581722 5.581722,2 10,2 C14.418278,2 18,5.581722 18,10 C18,11.8487115 17.3729184,13.5509601 16.3198574,14.9056439 Z M10,16 C13.3137085,16 16,13.3137085 16,10 C16,6.6862915 13.3137085,4 10,4 C6.6862915,4 4,6.6862915 4,10 C4,13.3137085 6.6862915,16 10,16 Z"/>
		</SVG>
	)
}

export default SearchIcon
