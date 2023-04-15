import React from 'react'

import styled from 'styled-components'

import { TOKENS } from '.style'

const Steps = (props) => {
  return (
    <StyledSteps>
      <Text>
        <span>Discover Our Process</span>
      </Text>
      <Text02>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <br></br>
        <span></span>
      </Text02>
      <Container>
        <Step>
          <Container01>
            <Line></Line>
            <Container02>
              <Icon viewBox="0 0 1024 1024">
                <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
              </Icon>
            </Container02>
            <Line1></Line1>
          </Container01>
          <Container03>
            <Text05>
              <span>Ideate</span>
            </Text05>
            <Text07>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              <br></br>
              <span></span>
            </Text07>
          </Container03>
        </Step>
        <Step1>
          <Container04>
            <Line2></Line2>
            <Container05>
              <Icon2 viewBox="0 0 1024 1024">
                <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
              </Icon2>
            </Container05>
            <Line3></Line3>
          </Container04>
          <Container06>
            <Text10>
              <span>Design</span>
            </Text10>
            <Text12>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              <br></br>
              <span></span>
            </Text12>
          </Container06>
        </Step1>
        <Step2>
          <Container07>
            <Line4></Line4>
            <Container08>
              <Icon4 viewBox="0 0 1024 1024">
                <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
              </Icon4>
            </Container08>
            <Line5></Line5>
          </Container07>
          <Container09>
            <Text15>
              <span>Develop</span>
            </Text15>
            <Text17>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              <br></br>
              <span></span>
            </Text17>
          </Container09>
        </Step2>
        <Step3>
          <Container10>
            <Line6></Line6>
            <Container11>
              <Icon7 viewBox="0 0 1024 1024">
                <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
              </Icon7>
            </Container11>
            <Line7></Line7>
          </Container10>
          <Container12>
            <Text20>
              <span>Deploy</span>
            </Text20>
            <Text22>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
              <br></br>
              <span></span>
            </Text22>
          </Container12>
        </Step3>
      </Container>
    </StyledSteps>
  )
}

export default Steps

const StyledSteps = styled('div')({
  width: '100%',
  display: 'flex',
  padding: TOKENS.DlSpaceSpaceThreeunits,
  'max-width': TOKENS.DlSizeSizeMaxwidth,
  'align-items': 'center',
  'flex-direction': 'column',
  position: 'relative',
  '@media(max-width: 767px)': {
    'padding-left': TOKENS.DlSpaceSpaceTwounits,
    'padding-right': TOKENS.DlSpaceSpaceTwounits,
  },
  '@media(max-width: 479px)': {
    'padding-top': TOKENS.DlSpaceSpaceTwounits,
    'padding-left': TOKENS.DlSpaceSpaceUnit,
    'padding-right': TOKENS.DlSpaceSpaceUnit,
    'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
  },
})

const Text = styled('h1')({
  color: TOKENS.DlColorGrayBlack,
  'font-size': '3rem',
  '@media(max-width: 991px)': {
    'text-align': 'center',
  },
})

const Text02 = styled('span')({
  color: TOKENS.DlColorGray700,
  'font-size': '1.15rem',
  'max-width': '600px',
  'margin-top': TOKENS.DlSpaceSpaceUnit,
  'text-align': 'center',
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  '@media(max-width: 991px)': {
    'text-align': 'center',
  },
})

const Container = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  display: 'flex',
  'align-items': 'flex-start',
  'flex-direction': 'row',
  position: 'relative',
  '@media(max-width: 767px)': {
    'align-items': 'flex-start',
    'padding-left': TOKENS.DlSpaceSpaceFiveunits,
    'flex-direction': 'column',
  },
  '@media(max-width: 479px)': {
    'padding-left': '0px',
  },
})

const Step = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'flex-direction': 'column',
  '@media(max-width: 767px)': {
    width: '100%',
    height: 'auto',
    'flex-direction': 'row',
    'justify-content': 'center',
  },
})

const Container01 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  display: 'flex',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceUnit,
  'padding-left': '2px',
  'padding-right': '2px',
  'flex-direction': 'row',
  'justify-content': 'center',
  '@media(max-width: 767px)': {
    width: TOKENS.DlSizeSizeSmall,
    height: 'auto',
    'align-self': 'stretch',
    'padding-top': '0px',
    'padding-left': '0px',
    'padding-right': '0px',
    'flex-direction': 'column',
    'padding-bottom': '2px',
    'justify-content': 'space-between',
  },
})

const Line = styled('div')({
  flex: '1',
  height: '0px',
  display: 'flex',
  'align-items': 'flex-start',
  'border-color': 'transparent',
  'border-style': 'dashed',
  'border-width': '2px',
  'flex-direction': 'row',
  'border-left-width': '0px',
  'border-right-width': '0px',
  'border-bottom-width': '0px',
})

const Container02 = styled('div')({
  flex: '0 0 auto',
  width: TOKENS.DlSizeSizeSmall,
  height: TOKENS.DlSizeSizeSmall,
  display: 'flex',
  'align-items': 'center',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'flex-direction': 'row',
  'justify-content': 'center',
  'background-color': '#f5f5f5ff',
})

const Icon = styled('svg')({
  fill: TOKENS.DlColorGray500,
  width: '24px',
  height: '24px',
})

const Line1 = styled('div')({
  flex: '1',
  height: '0px',
  display: 'flex',
  'align-items': 'flex-start',
  'border-color': TOKENS.DlColorGray900,
  'border-style': 'dashed',
  'border-width': '2px',
  'flex-direction': 'row',
  'border-left-width': '0px',
  'border-right-width': '0px',
  'border-bottom-width': '0px',
  '@media(max-width: 767px)': {
    'border-color': TOKENS.DlColorGray900,
    'border-style': 'dashed',
    'border-top-width': '0px',
    'border-left-width': '2px',
  },
})

const Container03 = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceUnit,
  'padding-left': TOKENS.DlSpaceSpaceTwounits,
  'padding-right': TOKENS.DlSpaceSpaceTwounits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceUnit,
  '@media(max-width: 767px)': {
    width: '100%',
    'align-items': 'flex-start',
    'padding-top': TOKENS.DlSpaceSpaceTwounits,
    'flex-direction': 'column',
    'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
    'justify-content': 'space-between',
  },
  '@media(max-width: 479px)': {
    'padding-top': TOKENS.DlSpaceSpaceTwounits,
    'padding-left': TOKENS.DlSpaceSpaceUnit,
    'padding-right': '0px',
    'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
  },
})

const Text05 = styled('h1')({
  'font-size': '1.5rem',
  'text-align': 'center',
  'font-weight': '500',
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  '@media(max-width: 767px)': {
    'margin-top': TOKENS.DlSpaceSpaceTwounits,
    'margin-left': '0px',
    'margin-right': '0px',
    'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  },
  '@media(max-width: 479px)': {
    'margin-left': '0px',
    'margin-right': TOKENS.DlSpaceSpaceTwounits,
  },
})

const Text07 = styled('span')({
  'text-align': 'center',
  'font-size': '0.75rem',
  color: TOKENS.DlColorGray500,
  '@media(max-width: 767px)': {
    'text-align': 'left',
  },
})

const Step1 = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'flex-direction': 'column',
  '@media(max-width: 767px)': {
    width: '100%',
    height: 'auto',
    'flex-direction': 'row',
    'justify-content': 'center',
  },
})

const Container04 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  display: 'flex',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceUnit,
  'padding-left': '2px',
  'padding-right': '2px',
  'flex-direction': 'row',
  'justify-content': 'center',
  '@media(max-width: 767px)': {
    width: TOKENS.DlSizeSizeSmall,
    height: 'auto',
    'align-self': 'stretch',
    'padding-top': '0px',
    'padding-left': '0px',
    'padding-right': '0px',
    'flex-direction': 'column',
    'padding-bottom': '2px',
    'justify-content': 'space-between',
  },
})

const Line2 = styled('div')({
  flex: '1',
  height: '0px',
  display: 'flex',
  'align-items': 'flex-start',
  'border-color': TOKENS.DlColorGray900,
  'border-style': 'dashed',
  'border-width': '2px',
  'flex-direction': 'row',
  'border-left-width': '0px',
  'border-right-width': '0px',
  'border-bottom-width': '0px',
  '@media(max-width: 767px)': {
    'border-top-width': '0px',
    'border-left-width': '2px',
  },
})

const Container05 = styled('div')({
  flex: '0 0 auto',
  width: TOKENS.DlSizeSizeSmall,
  height: TOKENS.DlSizeSizeSmall,
  display: 'flex',
  'align-items': 'center',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'flex-direction': 'row',
  'justify-content': 'center',
  'background-color': '#f5f5f5ff',
})

const Icon2 = styled('svg')({
  fill: TOKENS.DlColorGray500,
  width: '24px',
  height: '24px',
})

const Line3 = styled('div')({
  flex: '1',
  height: '0px',
  display: 'flex',
  'align-items': 'flex-start',
  'border-color': TOKENS.DlColorGray900,
  'border-style': 'dashed',
  'border-width': '2px',
  'flex-direction': 'row',
  'border-left-width': '0px',
  'border-right-width': '0px',
  'border-bottom-width': '0px',
  '@media(max-width: 767px)': {
    'border-color': TOKENS.DlColorGray900,
    'border-style': 'dashed',
    'border-top-width': '0px',
    'border-left-width': '2px',
  },
})

const Container06 = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceUnit,
  'padding-left': TOKENS.DlSpaceSpaceTwounits,
  'padding-right': TOKENS.DlSpaceSpaceTwounits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceUnit,
  '@media(max-width: 767px)': {
    width: '100%',
    'align-items': 'flex-start',
    'padding-top': TOKENS.DlSpaceSpaceTwounits,
    'flex-direction': 'column',
    'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
    'justify-content': 'space-between',
  },
  '@media(max-width: 479px)': {
    'padding-top': TOKENS.DlSpaceSpaceTwounits,
    'padding-left': TOKENS.DlSpaceSpaceUnit,
    'padding-right': '0px',
    'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
  },
})

const Text10 = styled('h1')({
  'font-size': '1.5rem',
  'text-align': 'center',
  'font-weight': '500',
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  '@media(max-width: 767px)': {
    'margin-top': TOKENS.DlSpaceSpaceTwounits,
    'margin-left': '0px',
    'margin-right': '0px',
    'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  },
  '@media(max-width: 479px)': {
    'margin-left': '0px',
    'margin-right': TOKENS.DlSpaceSpaceTwounits,
  },
})

const Text12 = styled('span')({
  color: TOKENS.DlColorGray500,
  'font-size': '0.75rem',
  'text-align': 'center',
  '@media(max-width: 767px)': {
    'text-align': 'left',
  },
})

const Step2 = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'flex-direction': 'column',
  '@media(max-width: 767px)': {
    width: '100%',
    height: 'auto',
    'flex-direction': 'row',
    'justify-content': 'center',
  },
})

const Container07 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  display: 'flex',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceUnit,
  'padding-left': '2px',
  'padding-right': '2px',
  'flex-direction': 'row',
  'justify-content': 'center',
  '@media(max-width: 767px)': {
    width: TOKENS.DlSizeSizeSmall,
    height: 'auto',
    'align-self': 'stretch',
    'padding-top': '0px',
    'padding-left': '0px',
    'padding-right': '0px',
    'flex-direction': 'column',
    'padding-bottom': '2px',
    'justify-content': 'space-between',
  },
})

const Line4 = styled('div')({
  flex: '1',
  height: '0px',
  display: 'flex',
  'align-items': 'flex-start',
  'border-color': TOKENS.DlColorGray900,
  'border-style': 'dashed',
  'border-width': '2px',
  'flex-direction': 'row',
  'border-left-width': '0px',
  'border-right-width': '0px',
  'border-bottom-width': '0px',
  '@media(max-width: 767px)': {
    'border-top-width': '0px',
    'border-left-width': '2px',
  },
})

const Container08 = styled('div')({
  flex: '0 0 auto',
  width: TOKENS.DlSizeSizeSmall,
  height: TOKENS.DlSizeSizeSmall,
  display: 'flex',
  'align-items': 'center',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'flex-direction': 'row',
  'justify-content': 'center',
  'background-color': '#f5f5f5ff',
})

const Icon4 = styled('svg')({
  fill: TOKENS.DlColorGray500,
  width: '24px',
  height: '24px',
})

const Line5 = styled('div')({
  flex: '1',
  height: '0px',
  display: 'flex',
  'align-items': 'flex-start',
  'border-color': TOKENS.DlColorGray900,
  'border-style': 'dashed',
  'border-width': '2px',
  'flex-direction': 'row',
  'border-left-width': '0px',
  'border-right-width': '0px',
  'border-bottom-width': '0px',
  '@media(max-width: 767px)': {
    'border-color': TOKENS.DlColorGray900,
    'border-style': 'dashed',
    'border-top-width': '0px',
    'border-left-width': '2px',
  },
})

const Container09 = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceUnit,
  'padding-left': TOKENS.DlSpaceSpaceTwounits,
  'padding-right': TOKENS.DlSpaceSpaceTwounits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceUnit,
  '@media(max-width: 767px)': {
    width: '100%',
    'align-items': 'flex-start',
    'padding-top': TOKENS.DlSpaceSpaceTwounits,
    'flex-direction': 'column',
    'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
    'justify-content': 'space-between',
  },
  '@media(max-width: 479px)': {
    'padding-top': TOKENS.DlSpaceSpaceTwounits,
    'padding-left': TOKENS.DlSpaceSpaceUnit,
    'padding-right': '0px',
    'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
  },
})

const Text15 = styled('h1')({
  'font-size': '1.5rem',
  'text-align': 'center',
  'font-weight': '500',
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  '@media(max-width: 767px)': {
    'margin-top': TOKENS.DlSpaceSpaceTwounits,
    'margin-left': '0px',
    'margin-right': '0px',
    'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  },
  '@media(max-width: 479px)': {
    'margin-left': '0px',
    'margin-right': TOKENS.DlSpaceSpaceTwounits,
  },
})

const Text17 = styled('span')({
  color: TOKENS.DlColorGray500,
  'font-size': '0.75rem',
  'text-align': 'center',
  '@media(max-width: 767px)': {
    'text-align': 'left',
  },
})

const Step3 = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'flex-direction': 'column',
  '@media(max-width: 767px)': {
    width: '100%',
    height: 'auto',
    'flex-direction': 'row',
    'justify-content': 'center',
  },
})

const Container10 = styled('div')({
  flex: '0 0 auto',
  width: '100%',
  display: 'flex',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceUnit,
  'padding-left': '2px',
  'padding-right': '2px',
  'flex-direction': 'row',
  'justify-content': 'center',
  '@media(max-width: 767px)': {
    width: TOKENS.DlSizeSizeSmall,
    height: 'auto',
    'align-self': 'stretch',
    'padding-top': '0px',
    'padding-left': '0px',
    'padding-right': '0px',
    'flex-direction': 'column',
    'padding-bottom': '2px',
    'justify-content': 'space-between',
  },
})

const Line6 = styled('div')({
  flex: '1',
  height: '0px',
  display: 'flex',
  'align-items': 'flex-start',
  'border-color': TOKENS.DlColorGray900,
  'border-style': 'dashed',
  'border-width': '2px',
  'flex-direction': 'row',
  'border-left-width': '0px',
  'border-right-width': '0px',
  'border-bottom-width': '0px',
  '@media(max-width: 767px)': {
    'border-top-width': '0px',
    'border-left-width': '2px',
  },
})

const Container11 = styled('div')({
  flex: '0 0 auto',
  width: TOKENS.DlSizeSizeSmall,
  height: TOKENS.DlSizeSizeSmall,
  display: 'flex',
  'align-items': 'center',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'flex-direction': 'row',
  'justify-content': 'center',
  'background-color': '#f5f5f5ff',
})

const Icon7 = styled('svg')({
  fill: TOKENS.DlColorGray500,
  width: '24px',
  height: '24px',
})

const Line7 = styled('div')({
  flex: '1',
  height: '0px',
  display: 'flex',
  'align-items': 'flex-start',
  'border-color': 'transparent',
  'border-style': 'dashed',
  'border-width': '2px',
  'flex-direction': 'row',
  'border-left-width': '0px',
  'border-right-width': '0px',
  'border-bottom-width': '0px',
  '@media(max-width: 767px)': {
    'border-color': 'transparent',
    'border-style': 'dashed',
    'border-top-width': '0px',
    'border-left-width': '2px',
  },
})

const Container12 = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'padding-top': TOKENS.DlSpaceSpaceUnit,
  'padding-left': TOKENS.DlSpaceSpaceTwounits,
  'padding-right': TOKENS.DlSpaceSpaceTwounits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceUnit,
  '@media(max-width: 767px)': {
    width: '100%',
    'align-items': 'flex-start',
    'padding-top': TOKENS.DlSpaceSpaceTwounits,
    'flex-direction': 'column',
    'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
    'justify-content': 'space-between',
  },
  '@media(max-width: 479px)': {
    'padding-top': TOKENS.DlSpaceSpaceTwounits,
    'padding-left': TOKENS.DlSpaceSpaceUnit,
    'padding-right': '0px',
    'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
  },
})

const Text20 = styled('h1')({
  'font-size': '1.5rem',
  'text-align': 'center',
  'font-weight': '500',
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  '@media(max-width: 767px)': {
    'margin-top': TOKENS.DlSpaceSpaceTwounits,
    'margin-left': '0px',
    'margin-right': '0px',
    'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  },
  '@media(max-width: 479px)': {
    'margin-left': '0px',
    'margin-right': TOKENS.DlSpaceSpaceTwounits,
  },
})

const Text22 = styled('span')({
  color: TOKENS.DlColorGray500,
  'font-size': '0.75rem',
  'text-align': 'center',
  '@media(max-width: 767px)': {
    'text-align': 'left',
  },
})