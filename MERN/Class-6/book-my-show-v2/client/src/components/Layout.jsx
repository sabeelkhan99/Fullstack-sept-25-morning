import React from 'react'
import { Layout as AntLayout, Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router'

const { Header, Content, Footer } = AntLayout

const AppLayout = (props) => {
    return (
        <AntLayout style={{ minHeight: '100vh' }}>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#F84464',
                    padding: '0 12px',
                }}
            >
                <Link to="/" style={{ color: '#fff', fontWeight: 700, fontSize: 'clamp(1rem, 4vw, 1.5rem)' }}>
                    BookMyShow
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Input
                        placeholder="Search..."
                        prefix={<SearchOutlined />}
                        style={{ width: 'min(280px, 40vw)' }}
                    />
                    <Button type="default" size="small" style={{ background: '#fff', color: '#F84464' }}>
                        Sign In
                    </Button>
                </div>
            </Header>
            <Content style={{ padding: '0 12px', background: '#fff' }}>
                {props.children}
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    background: '#1A1A1A',
                    color: '#999',
                    padding: '16px 12px',
                }}
            >
                <div style={{ marginBottom: 16 }}>
                    <a href="#movies" style={{ color: '#fff', marginRight: 24 }}>
                        Movies
                    </a>
                    <a href="#events" style={{ color: '#fff', marginRight: 24 }}>
                        Events
                    </a>
                    <a href="#plays" style={{ color: '#fff', marginRight: 24 }}>
                        Plays
                    </a>
                    <a href="#sports" style={{ color: '#fff' }}>
                        Sports
                    </a>
                </div>
                <div style={{ fontSize: 12 }}>
                    © {new Date().getFullYear()} BookMyShow. All rights reserved.
                </div>
            </Footer>
        </AntLayout>
    )
}

export default AppLayout
