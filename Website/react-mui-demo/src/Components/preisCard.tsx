import React from 'react'

import styled from 'styled-components'
import PropTypes from 'prop-types'

import { projectStyleVariants, TOKENS } from '.style'

const Pricing = (props) => {
  return (
    <StyledPricing>
      <Container>
        <PricingCard>
          <Text>{props.text}</Text>
          <Container1>
            <Text01>
              <span>$</span>
              <span></span>
            </Text01>
            <Text04>{props.text3}</Text04>
          </Container1>
          <Container2>
            <Text05>
              <span>✔ Full access to design tool</span>
            </Text05>
            <Text07>
              <span>✔ Publish with Teleport</span>
            </Text07>
            <Text09>
              <span>✔ Subdomain publish</span>
            </Text09>
            <Text11>
              <span>✔ Download code</span>
            </Text11>
          </Container2>
          <Button projVariant="button">{props.button}</Button>
        </PricingCard>
        <PricingCard1>
          <Text13>{props.text1}</Text13>
          <Container3>
            <Text14>
              <span>$</span>
              <span></span>
            </Text14>
            <Text17>{props.text4}</Text17>
            <Text18>
              <span>/ monthly</span>
            </Text18>
          </Container3>
          <Text20>
            <span>Billed annualy or $12 month-to-month.</span>
            <span></span>
          </Text20>
          <Container4>
            <Text23>
              <span>✔ All features of FREE plan</span>
            </Text23>
            <Text25>
              <span>✔ Connect to custom domains</span>
            </Text25>
            <Text27>
              <span>✔ Private projects</span>
            </Text27>
            <Text29>
              <span>✔ No project limitations</span>
            </Text29>
            <Text31>
              <span>✔ Unlimited collabotators</span>
            </Text31>
          </Container4>
          <Button1 projVariant="button">{props.button1}</Button1>
        </PricingCard1>
        <PricingCard2>
          <Text33>{props.text2}</Text33>
          <Container5>
            <Text34>
              <span>$</span>
              <span></span>
            </Text34>
            <Text37>{props.text5}</Text37>
            <Text38>
              <span>/ monthly</span>
            </Text38>
          </Container5>
          <Text40>
            <span>Billed annualy or $32 month-to-month.</span>
            <span></span>
          </Text40>
          <Container6>
            <Text43>
              <span>✔ All features of BASIC plan</span>
            </Text43>
            <Text45>
              <span>✔ Priority support</span>
            </Text45>
            <Text47>
              <span>✔ Premium analytics</span>
            </Text47>
            <Text49>
              <span>✔ Version history</span>
            </Text49>
          </Container6>
          <Button2 projVariant="button">{props.button2}</Button2>
        </PricingCard2>
      </Container>
    </StyledPricing>
  )
}

const StyledPricing = styled('div')({
  width: '100%',
  display: 'flex',
  'background-size': 'cover',
  'justify-content': 'center',
  'background-image':
    "url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&h=1200')",
  'background-position': 'center',
  position: 'relative',
})

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  padding: TOKENS.DlSpaceSpaceThreeunits,
  'max-width': TOKENS.DlSizeSizeMaxwidth,
  'align-items': 'center',
  'background-size': 'cover',
  'justify-content': 'center',
  '@media(max-width: 767px)': {
    'flex-flow': 'column',
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

const PricingCard = styled('div')({
  width: '100%',
  display: 'flex',
  padding: TOKENS.DlSpaceSpaceThreeunits,
  'max-width': '450px',
  'min-height': '450px',
  'align-items': 'flex-start',
  'padding-top': TOKENS.DlSpaceSpaceTwounits,
  transition: '0.3s',
  'margin-right': TOKENS.DlSpaceSpaceTwounits,
  'padding-left': TOKENS.DlSpaceSpaceTwounits,
  'padding-right': TOKENS.DlSpaceSpaceTwounits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
  'justify-content': 'space-between',
  'background-color': TOKENS.DlColorGrayWhite,
  '@media(max-width: 991px)': {
    width: '100%',
    padding: TOKENS.DlSpaceSpaceTwounits,
    'max-width': '100%',
    'align-items': 'center',
  },
  '@media(max-width: 767px)': {
    width: '100%',
    'max-width': '450px',
    'align-items': 'center',
    'margin-right': '0px',
    'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
  },
  '&:hover': {
    transform: 'scale(1.02)',
  },
})

const Text = styled('span')({
  'font-size': '1.5rem',
  'font-weight': '600',
  'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
  'text-transform': 'uppercase',
})

const Container1 = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
  'flex-direction': 'row',
})

const Text01 = styled('span')({
  'font-size': '1.15rem',
  'margin-top': TOKENS.DlSpaceSpaceTwounits,
  'font-weight': '300',
})

const Text04 = styled('span')({
  'font-size': '4rem',
  'font-weight': '700',
})

const Container2 = styled('div')({
  display: 'flex',
  'align-items': 'flex-start',
  'margin-bottom': TOKENS.DlSpaceSpaceThreeunits,
  'flex-direction': 'column',
})

const Text05 = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Text07 = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Text09 = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Text11 = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Button = styled('button')(projectStyleVariants, {
  color: TOKENS.DlColorGrayWhite,
  'margin-top': 'auto',
  'padding-top': TOKENS.DlSpaceSpaceUnit,
  'padding-left': TOKENS.DlSpaceSpaceTwounits,
  'padding-right': TOKENS.DlSpaceSpaceTwounits,
  'padding-bottom': TOKENS.DlSpaceSpaceUnit,
  'background-color': TOKENS.DlColorGrayBlack,
})

const PricingCard1 = styled('div')({
  width: '100%',
  display: 'flex',
  padding: TOKENS.DlSpaceSpaceTwounits,
  'max-width': '450px',
  'min-height': '450px',
  'align-items': 'flex-start',
  transition: '0.3s',
  'margin-right': TOKENS.DlSpaceSpaceTwounits,
  'flex-direction': 'column',
  'background-color': TOKENS.DlColorGrayWhite,
  '@media(max-width: 991px)': {
    width: '100%',
    'max-width': '100%',
    'align-items': 'center',
  },
  '@media(max-width: 767px)': {
    width: '100%',
    'max-width': '450px',
    'align-items': 'center',
    'margin-right': '0px',
    'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
  },
  '&:hover': {
    transform: 'scale(1.02)',
  },
})

const Text13 = styled('span')({
  'font-size': '1.5rem',
  'font-weight': '600',
  'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
  'text-transform': 'uppercase',
})

const Container3 = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
  'flex-direction': 'row',
})

const Text14 = styled('span')({
  'font-size': '1.15rem',
  'margin-top': TOKENS.DlSpaceSpaceTwounits,
  'font-weight': '300',
})

const Text17 = styled('span')({
  'font-size': '4rem',
  'font-weight': '700',
})

const Text18 = styled('span')({
  'font-size': '1.15rem',
  'font-style': 'normal',
  'margin-top': TOKENS.DlSpaceSpaceTwounits,
  'font-weight': '300',
})

const Text20 = styled('span')({
  color: TOKENS.DlColorGray500,
  'font-size': '0.75rem',
  'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
})

const Container4 = styled('div')({
  display: 'flex',
  'align-items': 'flex-start',
  'margin-bottom': TOKENS.DlSpaceSpaceThreeunits,
  'flex-direction': 'column',
})

const Text23 = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Text25 = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Text27 = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Text29 = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Text31 = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Button1 = styled('button')(projectStyleVariants, {
  color: TOKENS.DlColorGrayWhite,
  'margin-top': 'auto',
  'padding-top': TOKENS.DlSpaceSpaceUnit,
  'padding-left': TOKENS.DlSpaceSpaceTwounits,
  'padding-right': TOKENS.DlSpaceSpaceTwounits,
  'padding-bottom': TOKENS.DlSpaceSpaceUnit,
  'background-color': TOKENS.DlColorGrayBlack,
})

const PricingCard2 = styled('div')({
  width: '100%',
  display: 'flex',
  padding: TOKENS.DlSpaceSpaceThreeunits,
  'max-width': '450px',
  'min-height': '450px',
  'align-items': 'flex-start',
  'padding-top': TOKENS.DlSpaceSpaceTwounits,
  transition: '0.3s',
  'padding-left': TOKENS.DlSpaceSpaceTwounits,
  'padding-right': TOKENS.DlSpaceSpaceTwounits,
  'flex-direction': 'column',
  'padding-bottom': TOKENS.DlSpaceSpaceTwounits,
  'background-color': TOKENS.DlColorGrayWhite,
  '@media(max-width: 991px)': {
    width: '100%',
    'max-width': '100%',
    'align-items': 'center',
  },
  '@media(max-width: 767px)': {
    width: '100%',
    'max-width': '450px',
    'align-items': 'center',
    'margin-right': '0px',
    'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
  },
  '@media(max-width: 479px)': {
    'margin-bottom': '0px',
  },
  '&:hover': {
    transform: 'scale(1.02)',
  },
})

const Text33 = styled('span')({
  'font-size': '1.5rem',
  'font-weight': '600',
  'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
  'text-transform': 'uppercase',
})

const Container5 = styled('div')({
  display: 'flex',
  'align-items': 'center',
  'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
  'flex-direction': 'row',
})

const Text34 = styled('span')({
  'font-size': '1.15rem',
  'margin-top': TOKENS.DlSpaceSpaceTwounits,
  'font-weight': '300',
})

const Text37 = styled('span')({
  'font-size': '4rem',
  'font-weight': '700',
})

const Text38 = styled('span')({
  'font-size': '1.15rem',
  'font-style': 'normal',
  'margin-top': TOKENS.DlSpaceSpaceTwounits,
  'font-weight': '300',
})

const Text40 = styled('span')({
  color: TOKENS.DlColorGray500,
  'font-size': '0.75rem',
  'margin-bottom': TOKENS.DlSpaceSpaceTwounits,
})

const Container6 = styled('div')({
  display: 'flex',
  'align-items': 'flex-start',
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
  'flex-direction': 'column',
})

const Text43 = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Text45 = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Text47 = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Text49 = styled('span')({
  'margin-bottom': TOKENS.DlSpaceSpaceUnit,
})

const Button2 = styled('button')(projectStyleVariants, {
  color: TOKENS.DlColorGrayWhite,
  'margin-top': 'auto',
  'padding-top': TOKENS.DlSpaceSpaceUnit,
  'padding-left': TOKENS.DlSpaceSpaceTwounits,
  'padding-right': TOKENS.DlSpaceSpaceTwounits,
  'padding-bottom': TOKENS.DlSpaceSpaceUnit,
  'background-color': TOKENS.DlColorGrayBlack,
})

Pricing.defaultProps = {
  text: 'Free',
  button: 'Learn More',
  text1: 'basic',
  button1: 'Learn More',
  text2: 'Pro',
  button2: 'Learn More',
  text3: '0',
  text4: '9',
  text5: '29',
}

Pricing.propTypes = {
  text: PropTypes.string,
  button: PropTypes.string,
  text1: PropTypes.string,
  button1: PropTypes.string,
  text2: PropTypes.string,
  button2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
}

export default Pricing