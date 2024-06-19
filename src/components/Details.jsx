import React from 'react';
import Slider from 'react-slick';
import {  
    Box,
    Button,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Details = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            phone: data.get('phone'),
        });
    }

    const profiles = [
        {
            id: 1,
            name: 'sucihamid',
            comments: ['gacor kang'],
            imageUrl: 'data:image/jpeg;base64,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'
        },
        {
            id: 2,
            name: 'selebkah',
            comments: ['idih', 'menyala king'],
            imageUrl: 'data:image/jpeg;base64,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'
        },
        {
            id: 3,
            name: 'KING Zharif',
            comments: ['tetap semangat', 'jangan pernah', 'menyerah'],
            imageUrl: 'data:image/jpeg;base64,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'
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Stack 
            component='section'
            direction="row"
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 10,
                px: 2,
            }}
        >
            <Box 
                sx={{
                    width: '50%',
                }}
            >
                <Slider {...settings}>
                    {profiles.map(profile => (
                        <Box
                            key={profile.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mb: 4,
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    mb: 2,
                                }}
                            >
                                <img 
                                    src={profile.imageUrl}
                                    alt={`${profile.name} profile`}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>
                            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
                                {profile.name}
                            </Typography>
                            {profile.comments.map((comment, index) => (
                                <Typography key={index} variant="body2" component="div" sx={{ mb: 0.5 }}>
                                    {comment}
                                </Typography>
                            ))}
                        </Box>
                    ))}
                </Slider>
            </Box>

            <Box 
                component="form" 
                noValidate 
                onSubmit={handleSubmit} 
                sx={{ 
                    width: '50%',
                    pl: 4,
                }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    type="phone"
                    id="phone"
                    autoComplete="current-phone"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="comment"
                    label="Comment"
                    type="text"
                    id="comment"
                    multiline
                    rows={4}
                    autoComplete="current-comment"
                />
                <Button 
                    variant="contained" 
                    fullWidth
                    type="submit"
                    size="medium"
                    sx= {{ 
                        fontSize: '0.9rem',
                        textTransform: 'capitalize', 
                        py: 2,
                        mt: 3, 
                        mb: 2,
                        borderRadius: 0,
                        backgroundColor: '#14192d',
                        "&:hover": {
                            backgroundColor: '#1e2a5a',
                        }
                    }}
                >
                    Kirim
                </Button>
            </Box>
        </Stack>
    )
}

export default Details;
