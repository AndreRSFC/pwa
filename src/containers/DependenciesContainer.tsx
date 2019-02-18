import { compose } from 'recompose'
import { withRouter, RouteComponentProps } from 'react-router'
import { ComponentType } from 'react'

type DependenciesProps<P> = RouteComponentProps<P>

export const DependenciesContainer = <P extends object>(
  Component: ComponentType<P>
) => {
  return compose<P, DependenciesProps<P>>(withRouter)(Component)
}
