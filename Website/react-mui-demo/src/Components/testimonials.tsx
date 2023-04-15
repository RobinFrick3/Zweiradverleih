import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import { TOKENS } from '.style'

const TestimonialCard = (props) => {
  return (
    <StyledTestimonialCard>
      <Icon viewBox="0 0 1024 1024">
        <path d="M800 640c-123.712 0-224-100.29-224-224 0-123.712 100.288-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.634-11.636 22.252-24.016 31.83-37.020-11.438 1.8-23.16 2.746-35.104 2.746zM224 640c-123.71 0-224-100.29-224-224 0-123.712 100.29-224 224-224s224 100.288 224 224l1 32c0 247.424-200.576 448-448 448v-128c85.474 0 165.834-33.286 226.274-93.726 11.636-11.636 22.254-24.016 31.832-37.020-11.44 1.8-23.16 2.746-35.106 2.746z"></path>
      </Icon>
      <Testimonial>
        <Text>{props.text}</Text>
        <Image alt={props.image_alt} src={props.image_src} />
        <Text1>{props.text1}</Text1>
      </Testimonial>
    </StyledTestimonialCard>
  )
}

const StyledTestimonialCard = styled('header')({
  display: 'flex',
  padding: TOKENS.DlSpaceSpaceTwounits,
  'max-width': TOKENS.DlSizeSizeMaxwidth,
  'align-items': 'center',
  'flex-direction': 'column',
  position: 'relative',
  '@media(max-width: 479px)': {
    'padding-left': TOKENS.DlSpaceSpaceUnit,
    'padding-right': TOKENS.DlSpaceSpaceUnit,
  },
})

const Icon = styled('svg')({
  width: TOKENS.DlSizeSizeSmall,
  'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
  '@media(max-width: 767px)': {
    height: TOKENS.DlSizeSizeSmall,
  },
})

const Testimonial = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'flex-direction': 'column',
})

const Text = styled('span')({
  color: TOKENS.DlColorGray500,
  'font-size': '1.25rem',
  'text-align': 'center',
  'margin-bottom': TOKENS.DlSpaceSpaceThreeunits,
})

const Image = styled('img')({
  width: TOKENS.DlSizeSizeMedium,
  height: TOKENS.DlSizeSizeMedium,
  'object-fit': 'cover',
  'flex-shrink': '0',
  'border-radius': TOKENS.DlRadiusRadiusRound,
  'margin-bottom': TOKENS.DlSpaceSpaceHalfunit,
})

const Text1 = styled('span')({
  'font-size': '1.5rem',
  'font-weight': '300',
})

TestimonialCard.defaultProps = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.  Nam pellentesque nulla leo, sagittis vehicula sem commodo nec.',
  image_src:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&ixlib=rb-1.2.1&h=1200',
  image_alt: 'profile',
  text1: 'John Doe',
}

TestimonialCard.propTypes = {
  text: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
}

export default TestimonialCard