import React, { ReactChild } from 'react'

export const Layout= ({
    children
}:{
    children: ReactChild[]
}) => (
    <main style={{
        padding: '1.25rem'
    }}>
        { children }
    </main>
)