import * as React from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'

import { SignIn, doSignInAtProvider } from '../actions/auth'

import { Button } from '@ondetempico/shared/src/components/Button'

import { DependenciesContainerType } from '../types'
import { Actionable } from '../actions/types'

import * as background from '../../src/statics/images/2.jpg'
import * as spot from '../../src/statics/images/4.jpg'
import * as logo from '../../src/statics/images/logo.svg'

import { styled, css } from '../theme'

type Actions = {
  doSignInAtProvider: () => void
}

type Props = Actions & DependenciesContainerType

export type State = Props
export type Dispatch = ThunkDispatch<State, undefined, Actionable<SignIn>>

const Home = styled.div`
  width: 100%;
  height: 100vh;
`

const Background = styled.div`
  top: 50%;
  left: 40%;
  width: 60%;
  height: 80vh;
  position: absolute;
  background: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Logo = styled.img`
  max-width: 80px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`

const Title = styled.h1`
  padding-top: 40px;
  padding-left: 50px;
  max-width: 700px;
  font-weight: 700;
  color: ${props => props.theme.colors.secondary};
  font-size: 45px;
  letter-spacing: 1px;
`

const Body = styled.div`
  height: calc(100% - 100px);
`

const Spots = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.secondary};
  display: flex;
`

const Spot = css`
  width: 100%;
  max-width: 50%;
  margin-top: 50px;
  margin-bottom: 50px;
`

const SpotExplanation = styled.div`
  margin-left: 50px;
  ${Spot};
`

const SpotTitle = styled.h2`
  font-size: 35px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 10px;
`

const SpotDescription = styled.p`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
`

class Landing extends React.Component<Props, State> {
  componentDidMount(): void {
    const { history, auth } = this.props

    if (auth.isAuthenticated) {
      history.push('/spots/list')
    }
  }

  componentDidUpdate(prevProps: any): void {
    const { history, auth } = this.props
    const { isAuthenticated } = auth

    if (isAuthenticated && !prevProps.auth.isAuthenticated) {
      history.push('/spots/list')
    }
  }

  render(): React.ReactNode {
    return (
      <React.Fragment>
        <Home>
          <Header>
            <Logo src={logo} alt="Ondetempico" />

            <Button
              color="primary"
              size="medium"
              onClick={this.props.doSignInAtProvider}
            >
              Entrar
            </Button>
          </Header>

          <Body>
            <Title>Encontre e compartilhe novos picos para sua sessão.</Title>
          </Body>

          <Background />
        </Home>

        <Spots>
          <SpotExplanation>
            <SpotTitle>Encontre diversos picos</SpotTitle>

            <SpotDescription>
              De maneira colaborativa, skatistas compartilharem picos (locais
              para se praticar o esporte) para que haja troca de conhecimento
              entre estes, com características do local, sendo pago ou público,
              street e outras modalidades.
            </SpotDescription>
          </SpotExplanation>
        </Spots>

        <div className="socials">
          <h2 className="socials__title">Siga nossas redes</h2>

          <a
            className="socials__icon icon--facebook"
            rel="noopener noreferrer"
            target="_blank"
            href="https://facebook.com/ondetempico"
          />

          <a
            className="socials__icon icon--instagram"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/ondetempico"
          />
        </div>
      </React.Fragment>
    )
  }
}

const mapActionsToProps = (dispatch: Dispatch): Actions => ({
  doSignInAtProvider: () => dispatch(doSignInAtProvider())
})

const mapStateToProps = (state: State): State => state

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Landing)
