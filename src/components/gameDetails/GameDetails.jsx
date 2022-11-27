import { Logout, Window, WebAsset } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../Hooks/useFetchData';
import Loading from '../Loading/Loading';
import Slide from './Slider';

export default function GameDetails() {
  const item = useParams();

  const gameDetails = `https://free-to-play-games-database.p.rapidapi.com/api/game`;
  const { data, loading } = useFetchData(gameDetails, item);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container sx={{ mt: '20px' }}>
          {data ? (
            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <img src={data?.thumbnail} alt='' />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    mt: '10px',
                  }}
                >
                  <Button variant='contained'>free</Button>
                  <Button
                    href={data?.freetogame_profile_url}
                    endIcon={<Logout />}
                    variant='contained'
                    fullWidth
                  >
                    play now
                  </Button>
                </Box>
              </Grid>
              <Grid item md={8} xs={12}>
                <List>
                  <ListItem>
                    <Typography component={'h2'} variant='h2'>
                      {data?.title}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={'h5'} variant='h5'>
                      About {data?.title}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography component={'p'}>{data?.description}</Typography>
                  </ListItem>
                  {data.platform != 'Web Browser' && (
                    <>
                      <ListItem>
                        <Typography component={'h5'} variant='h5'>
                          Minimum System Requirements
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <List>
                          <ListItem>
                            <Typography
                              component={'h6'}
                              variant='h6'
                              sx={{
                                textTransform: 'capitalize',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                              }}
                            >
                              graphics :
                              <Typography component={'p'} variant='caption'>
                                {data?.minimum_system_requirements?.graphics}{' '}
                              </Typography>
                            </Typography>
                          </ListItem>
                          <ListItem>
                            <Typography
                              component={'h6'}
                              variant='h6'
                              sx={{
                                textTransform: 'capitalize',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                              }}
                            >
                              memory :
                              <Typography component={'p'} variant='caption'>
                                {data?.minimum_system_requirements?.memory}{' '}
                              </Typography>
                            </Typography>
                          </ListItem>
                          <ListItem>
                            <Typography
                              component={'h6'}
                              variant='h6'
                              sx={{
                                textTransform: 'capitalize',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                              }}
                            >
                              os :
                              <Typography component={'p'} variant='caption'>
                                {data?.minimum_system_requirements?.os}{' '}
                              </Typography>
                            </Typography>
                          </ListItem>
                          <ListItem>
                            <Typography
                              component={'h6'}
                              variant='h6'
                              sx={{
                                textTransform: 'capitalize',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                              }}
                            >
                              processor :
                              <Typography component={'p'} variant='caption'>
                                {data?.minimum_system_requirements?.processor}{' '}
                              </Typography>
                            </Typography>
                          </ListItem>
                          <ListItem>
                            <Typography
                              component={'h6'}
                              variant='h6'
                              sx={{
                                textTransform: 'capitalize',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                              }}
                            >
                              storage :
                              <Typography component={'p'} variant='caption'>
                                {data?.minimum_system_requirements?.storage}{' '}
                              </Typography>
                            </Typography>
                          </ListItem>
                        </List>
                      </ListItem>
                    </>
                  )}
                  <ListItem>
                    <Typography component={'h5'} variant='h5'>
                      Fall Guys Screenshots
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Slide images={data?.screenshots} />
                  </ListItem>
                  <ListItem>
                    <Typography component={'h5'} variant='h5'>
                      Additional Information
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Grid item md={4}>
                      <Typography
                        component={'h6'}
                        variant={'h6'}
                        sx={{ textTransform: 'capitalize' }}
                      >
                        title
                      </Typography>
                      <Typography>{data.title}</Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Typography
                        component={'h6'}
                        variant={'h6'}
                        sx={{ textTransform: 'capitalize' }}
                      >
                        Developer
                      </Typography>
                      <Typography>{data.developer}</Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Typography
                        component={'h6'}
                        variant={'h6'}
                        sx={{ textTransform: 'capitalize' }}
                      >
                        Publisher
                      </Typography>
                      <Typography>{data.publisher}</Typography>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Grid item md={4}>
                      <Typography
                        component={'h6'}
                        variant={'h6'}
                        sx={{ textTransform: 'capitalize' }}
                      >
                        Release Date
                      </Typography>
                      <Typography>{data.release_date}</Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Typography
                        component={'h6'}
                        variant={'h6'}
                        sx={{ textTransform: 'capitalize' }}
                      >
                        Genre
                      </Typography>
                      <Typography>{data.genre}</Typography>
                    </Grid>
                    <Grid item md={4}>
                      <Typography
                        component={'h6'}
                        variant={'h6'}
                        sx={{ textTransform: 'capitalize' }}
                      >
                        Platform
                      </Typography>
                      <Typography>
                        {data.platform === 'Windows' ? (
                          <Window />
                        ) : (
                          <WebAsset />
                        )}{' '}
                        {data.platform}{' '}
                      </Typography>
                    </Grid>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          ) : (
            <Box>
              <Typography>choess your game</Typography>
            </Box>
          )}
        </Container>
      )}
    </>
  );
}
