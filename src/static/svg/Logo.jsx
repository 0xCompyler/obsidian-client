import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
	background: transparent;
	fill: currentColor;
`

const LogoIcon = () => {
	return (
		<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 533.14" width="24" width="24">
			<defs>
				<style>{`
					.cls-1{
						fill:#444444;
					}
					.cls-2{
						fill:#343434;
					}
					.cls-3{
						fill:#5b5b5b;
					}
					.cls-4{
						fill:#bbbbbb;
					}
					.cls-5{
						fill:#9a9a9a;
					}
					.cls-6{
						fill:#7b7b7b;
					}
					.cls-7{
						fill:#a0a0a0;
					}`}</style>
			</defs>
			<g id="Layer_2" data-name="Layer 2">
				<g id="final-logo">
					<polygon class="cls-1" points="299.71 63.4 400 236.15 391.93 368.88 269.56 532.56 130.74 532.56 56.48 449.57 0 236.31 28.82 138.33 167.15 0 299.71 63.4" />
					<polygon class="cls-2" points="91.09 186.47 0 236.31 56.48 449.57 109.93 433.99 91.09 186.47" />
					<polygon class="cls-3" points="152.16 92.29 91.09 186.47 109.93 433.99 220.17 293.95 152.16 92.29" />
					<polygon class="cls-4" points="299.71 63.4 167.15 0 152.16 92.29 248.99 132.56 299.71 63.4" />
					<polygon class="cls-5" points="299.71 63.4 248.99 132.56 220.17 293.95 391.93 368.88 400 236.31 299.71 63.4" />
					<polygon class="cls-6" points="220.17 293.95 109.93 433.99 130.74 532.56 269.16 533.14 391.93 368.87 220.17 293.95" />
					<polygon class="cls-7" points="152.16 92.29 220.17 293.95 248.99 132.56 152.16 92.29" />
				</g>
			</g>
		</SVG>
	)
}

export default LogoIcon
