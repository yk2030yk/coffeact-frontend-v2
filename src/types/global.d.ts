import React from 'react'

declare global {
  declare namespace AtomicDesign {
    export type Nucleon<T> = React.FC<T>

    export type Atom<T> = React.FC<T>

    export type Molecule<T> = React.FC<T>

    export type Organism<T> = React.FC<T>

    export type Template = React.FC

    export type Layout = React.FC

    export type Pages = React.FC
  }
}
