import React, { useState } from "react";
import styled from "styled-components";
import Plyr from "plyr-react";
import "@styles/plyr.css";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	height: 100%;
	overflow: auto;
	padding: 2rem;
	&::-webkit-scrollbar-track {
		border-radius: 10px;
		background-color: inherit;
	}

	&::-webkit-scrollbar {
		width: 6px;
		background-color: inherit;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		// background-color: #9295a0;
		background-color: #c3c3c3;
	}
`;

const Heading = styled.h1`
	font-size: 1.5rem !important;
	font-weight: 900;
	color: #ececec;
`;

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 1rem;
`;

const InputLabel = styled.h1`
	color: #d6d6d6;
	font-size: 1rem !important;
	font-weight: 700;
`;

const TextInput = styled.input`
	padding: 0.5rem 0.75rem;
	border-radius: 0.5rem;
	border: 2px solid var(--app-container-text-primary);
	background: var(--app-container-bg-primary);
	outline: none;
	font-size: 1rem;
	font-weight: 700;
	color: var(--app-text);
	width: 15rem;
`;

const ContentWrapper = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	gap: 2rem;
`

const Section = styled.section`
	display: flex;
	flex-direction: column;
	width:100%;
	height: 100%;
	justify-content: space-between;
	padding-bottom: 1rem;
`

const TranscriptSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: clamp(2rem, 1.5vw, 3rem);
	width:100%;
`

const VideoSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	.plyr{
		margin: 1rem 0;
		max-height: 24rem;
	}
`

const TranscriptContent = styled.p`
	font-size: 1rem;
	color: #d4e2f7;
	max-height: 50vh;
	overflow: auto;
	&::-webkit-scrollbar-track {
		border-radius: 10px;
		background-color: inherit;
	}

	&::-webkit-scrollbar {
		width: 6px;
		background-color: inherit;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		// background-color: #9295a0;
		background-color: #c3c3c3;
	}
`

const Video = React.memo(({ url }) => {
	const settings = {
		type: "video",
		sources: [{
			src: url
		}]
	}
	const options = {
		controls: [
			'play',
			'progress',
			'current-time',
			'duration',
			'mute',
			'volume',
			'fullscreen'
		],
	}
	return (
		<Plyr
			source={settings}
			options={options}
		/>
	)
})


const Meet = () => {
	const [url, setUrl] = useState("https://www.dropbox.com/s/jerz74q64ww9hev/lmaokuchbhi%20on%202021-11-05%2020-28.mp4?raw=1#");
	return (
		<Container>
			<Heading>Meet Info </Heading>
			<Section>
				{url&&(<ContentWrapper>
					<VideoSection>
						<InputLabel>Video</InputLabel>
						<Video url={url} />
					</VideoSection>
					<TranscriptSection>
						<InputLabel>Transcript</InputLabel>
						<TranscriptContent>"According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? - A little. Special day, graduation. Never thought I'd make it. Three days grade school, three days high school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around the hive. You did come back different. - Hi, Barry. - Artie, growing a mustache? Looks good. - Hear about Frankie? - Yeah. - You going to the funeral? - No, I'm not going. Everybody knows, sting someone, you die. Don't waste it on a squirrel. Such a hothead. I guess he could have just gotten out of the way. I love this incorporating an amusement park into our day. That's why we don't need vacations. Boy, quite a bit of pomp... under the circumstances. - Well, Adam, today we are men. - We are! - Bee-men."</TranscriptContent>
					</TranscriptSection>
				</ContentWrapper>)}
				<InputWrapper>
					<InputLabel>Enter Dropbox URL</InputLabel>
					<TextInput
						type="text"
						value={url}
						onChange={(e) => {
							e.preventDefault();
							setUrl(e.target.value);
						}}
					/>
				</InputWrapper>
			</Section>

		</Container>
	)
}

export default Meet
