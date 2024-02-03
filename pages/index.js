import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hey, I&apos;m an undergrad student at Columbia studying CS!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nick Lam
          </Heading>
          <p>( Software Developer / Web Designer / Digital Artist )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/nylprofile3.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me!
        </Heading>
        <Paragraph>
          Hi! I&apos;m Nick, and I&apos;m a second-year at Columbia University studying Computer
          Science and Financial Economics. I&apos;m also interested in urban planning,
          sustainable development, and the intersection of cities and tech! I love
          problem solving and puzzlehunts, and also writing music. Right now, I&apos;m working 
          on a project called {' '}
          <Link as={NextLink} href="/works/wasd" passHref scroll={false}>
            EXAMPLE
          </Link>
          . I also keep a blog called
           &quot;
          <Link
            as={NextLink}
            href="https://www.nicklam.dev/wasd"
            passHref
            target="_blank"
          >
            EXAMPLE
          </Link>
          &quot; where I write about life.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I&apos;m currently exploring
        </Heading>
        <Paragraph>
          Artificial Intelligence, Sustainable Cities,{' '}
          <Link href="https://https://open.spotify.com/user/xw3ud9q8mhto3ff9qml8cvhd8" target="_blank">
            Music Production
          </Link>
          , and UI/UX Design.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Let&apos;s Connect!
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/nlam0" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @nlam0
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/_nicklam" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @_nicklam
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/_nick.lam/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @_nick.lam
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          My Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes developmental journey. Receive updates on
          my projects and learning!
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.nicklam.dev/wasd/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up for my newsletter here
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
