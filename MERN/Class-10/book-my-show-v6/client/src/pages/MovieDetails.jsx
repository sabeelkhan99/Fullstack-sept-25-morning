import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Row, Col, Rate, Spin, Alert, Button, Card, Avatar, Tag, Divider, Empty } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import useHttp from '../hooks/useHttp'
import { fetchMovieById, fetchTheatresByMovieId } from '../lib/apis'

const MovieDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data: movie, error, isLoading, sendRequest } = useHttp(fetchMovieById, true)
    const {
        data: screeningsPayload,
        error: theatresError,
        isLoading: theatresLoading,
        sendRequest: sendTheatresRequest,
    } = useHttp(fetchTheatresByMovieId, true)

    useEffect(() => {
        if (id) {
            sendRequest(id)
            sendTheatresRequest(id)
        }
    }, [id])

    if (isLoading) {
        return (
            <div style={{ padding: '24px 8px', maxWidth: 1000, margin: '0 auto' }}>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="link"
                        icon={<ArrowLeftOutlined />}
                        onClick={() => navigate(-1)}
                        style={{ paddingLeft: 0 }}
                    >
                        Back
                    </Button>
                </div>
                <div style={{ minHeight: 260, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Spin size="large" description="Loading movie details..." />
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div style={{ padding: '24px 8px', maxWidth: 1000, margin: '0 auto' }}>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="link"
                        icon={<ArrowLeftOutlined />}
                        onClick={() => navigate(-1)}
                        style={{ paddingLeft: 0 }}
                    >
                        Back
                    </Button>
                </div>
                <Alert
                    message="Unable to load movie"
                    description={error}
                    type="error"
                    showIcon
                />
            </div>
        )
    }

    if (!movie) {
        return null
    }

    const { title, posterUrl, runtime, rating, description, cast } = movie

    return (
        <div style={{ padding: '24px 8px 32px', maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ marginBottom: 16 }}>
                <Button
                    type="link"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate(-1)}
                    style={{ paddingLeft: 0 }}
                >
                    Back
                </Button>
            </div>

            <Row gutter={[24, 24]}>
                <Col xs={24} md={9}>
                    <div
                        style={{
                            borderRadius: 8,
                            overflow: 'hidden',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
                            maxWidth: 320,
                            marginInline: 'auto',
                        }}
                    >
                        <div style={{ aspectRatio: '2/3', background: '#111' }}>
                            <img
                                src={posterUrl}
                                alt={title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                        </div>
                    </div>
                </Col>

                <Col xs={24} md={15}>
                    <h1
                        style={{
                            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                            marginBottom: 8,
                        }}
                    >
                        {title}
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <Rate
                                disabled
                                allowHalf
                                value={rating ? rating / 2 : 0}
                                style={{ fontSize: 18 }}
                            />
                            <span style={{ fontSize: 14, color: '#666' }}>
                                {rating?.toFixed(1) || 'N/A'} / 10
                            </span>
                        </div>
                        {runtime && (
                            <Tag color="magenta">
                                {runtime} mins
                            </Tag>
                        )}
                    </div>

                    {description && (
                        <p
                            style={{
                                fontSize: 14,
                                lineHeight: 1.6,
                                color: '#444',
                                marginBottom: 20,
                            }}
                        >
                            {description}
                        </p>
                    )}
                </Col>
            </Row>

            {cast && cast.length > 0 && (
                <div style={{ marginTop: 32 }}>
                    <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 16 }}>
                        Cast
                    </h2>
                    <Row gutter={[16, 16]}>
                        {cast.map((member) => (
                            <Col key={member._id || member.name} xs={12} sm={8} md={6}>
                                <Card
                                    hoverable
                                    styles={{
                                        body: { padding: 12, textAlign: 'center' },
                                    }}
                                >
                                    <Avatar
                                        src={member.profilePicture}
                                        alt={member.name}
                                        size={72}
                                        style={{ marginBottom: 8 }}
                                    />
                                    <div style={{ fontWeight: 600, fontSize: 13 }}>
                                        {member.name}
                                    </div>
                                    {member.alias && (
                                        <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>
                                            as {member.alias}
                                        </div>
                                    )}
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}

            <Divider style={{ marginTop: 32, marginBottom: 20 }} />

            <div style={{ marginTop: 8 }}>
                <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: 16 }}>
                    Theatres screening this movie
                </h2>

                {theatresLoading && (
                    <div style={{ minHeight: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Spin description="Loading theatres..." />
                    </div>
                )}

                {theatresError && (
                    <Alert
                        message="Unable to load theatres"
                        description={theatresError}
                        type="error"
                        showIcon
                        style={{ marginBottom: 16 }}
                    />
                )}

                {!theatresLoading && !theatresError && (
                    <>
                        {((screeningsPayload?.theatres || []).length === 0) ? (
                            <Empty description="No theatres are screening this movie yet." />
                        ) : (
                            <Row gutter={[12, 12]}>
                                {(screeningsPayload?.theatres || []).map((t) => (
                                    <Col key={t._id} xs={24} md={12}>
                                        <Card
                                            hoverable
                                            styles={{ body: { padding: 14 } }}
                                            title={t.name}
                                            extra={<Tag color="blue">{t.capacity ? `Capacity: ${t.capacity}` : 'Theatre'}</Tag>}
                                        >
                                            <div style={{ color: '#555', marginBottom: 10 }}>
                                                <div>{t.address || '-'}</div>
                                                <div>Contact: {t.contactNo || '-'}</div>
                                            </div>
                                            <Button type="primary">
                                                Book ticket
                                            </Button>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default MovieDetails

