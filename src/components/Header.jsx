import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr', // Menggunakan grid dengan lebar kolom 1:2
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: 'gray',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr', // Untuk tampilan mobile, hanya satu kolom
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        // Mengatur margin dan padding
        margin: 'auto', // Menengahkan teks di dalam kolom
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: '#fff',
                }}
                >
                    Selamat Datang Di Website GYMSchool
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#fff',
                }}
                >
                    kami memiliki lebih dari 1000 siswa dan lebih dari 500 
                    siswa yang sudah memenangkan beberapa kejuaraan.
                </Typography>

                <Box>
                    <Button 
                    variant='contained'
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#14192d',
                        color: '#fff',
                        backgroundColor: '#14192d',
                        "&&:hover": {
                            backgroundColor: "#343a55"
                        },
                        "&&:focus": {
                            backgroundColor: "#343a55"
                        }
                    }}
                    >
                        Daftar
                    </Button>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                // Mengatur margin dan padding
                margin: 'auto', // Menengahkan video di dalam kolom
                padding: theme.spacing(2),
                width: '90%', // Mengatur lebar video menjadi 100%
                height: '90%', // Mengatur tinggi video menjadi 100%
            })}
            >
                {/* Penggunaan elemen iframe untuk menampilkan video YouTube */}
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/p5hGl5Aa_uU?autoplay=1&mute=1&loop=1&controls=0&playlist=p5hGl5Aa_uU" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                ></iframe>
            </Box>

        </CustomBox>
    )
}

export default Header
