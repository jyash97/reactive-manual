import ButtonLink from './components/ButtonLink';
import Container from 'components/Container';
import Flex from 'components/Flex';
import SearchBox from 'components/SearchBox';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import {colors, media, sharedStyles} from 'theme';
import createOgUrl from 'utils/createOgUrl';

class Home extends Component {
  render() {
    const {data, location} = this.props;
    const title =
      'Reactive Manual - React components for building Search UIs';

    return (
      <div css={{width: '100%'}}>
        <TitleAndMetaTags
          title={title}
          ogUrl={createOgUrl(data.markdownRemark.fields.slug)}
        />
        <header
          css={{
            backgroundColor: colors.darker,
            color: colors.white,
          }}>
          <div
            css={{
              paddingTop: 45,
              paddingBottom: 20,

              [media.greaterThan('small')]: {
                paddingTop: 60,
                paddingBottom: 70,
              },

              [media.greaterThan('xlarge')]: {
                paddingTop: 95,
                paddingBottom: 85,
                marginLeft: 'auto',
                marginRight: 'auto',
              },
            }}>
            <Container>
              <h1
                css={{
                  color: colors.brand,
                  textAlign: 'center',
                  margin: 0,
                  fontSize: 45,
                  letterSpacing: '0.01em',
                  [media.size('xsmall')]: {
                    fontSize: 30,
                  },
                  [media.greaterThan('xlarge')]: {
                    fontSize: 60,
                  },
                }}>
                Reactive Manual
              </h1>
              <p
                css={{
                  paddingTop: 15,
                  textAlign: 'center',
                  fontSize: 24,
                  letterSpacing: '0.01em',
                  fontWeight: 200,

                  [media.size('xsmall')]: {
                    fontSize: 16,
                    maxWidth: '16em',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },

                  [media.greaterThan('xlarge')]: {
                    paddingTop: 20,
                    fontSize: 30,
                  },
                }}>
                UI Components for Elasticsearch
              </p>
              <Flex
                halign="center"
                css={{
                  paddingTop: 40,

                  [media.greaterThan('xlarge')]: {
                    paddingTop: 65,
                  },
                }}
              >
                <SearchBox prefixSlash={location.pathname.includes('/reactive-manual/')} />
              </Flex>
              <Flex
                valign="center"
                css={{
                  paddingTop: 40,

                  [media.greaterThan('xlarge')]: {
                    paddingTop: 65,
                  },
                }}>
                <CtaItem>
                  <ButtonLink to="/getting-started/" type="primary">
                    Getting Started
                  </ButtonLink>
                </CtaItem>
                <CtaItem>
                  <ButtonLink
                    to="/getting-started/componentsindex.html"
                    type="secondary">
                    Components Overview
                  </ButtonLink>
                </CtaItem>
              </Flex>
            </Container>
          </div>
        </header>

        <Container>
          <div
            css={[sharedStyles.markdown, markdownStyles]}
            dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
          />
        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const CtaItem = ({children, primary = false}) => (
  <div
    css={{
      width: '50%',
      paddingLeft: 15,

      [media.between('small', 'large')]: {
        paddingLeft: 30,
      },

      [media.greaterThan('xlarge')]: {
        paddingLeft: 40,
      },

      '&:first-child': {
        textAlign: 'right',
        paddingRight: 15,
        [media.between('xsmall', 'small')]: {
          paddingLeft: 0,
          paddingRight: 0,
        },
      },

      '&:nth-child(2)': {
        [media.greaterThan('small')]: {
          paddingLeft: 15,
        },
      },
    }}>
    {children}
  </div>
);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query HomeMarkdown($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;

export default Home;

// TODO This nasty CSS is required because 'docs/index.md' defines hard-coded class names.
const markdownStyles = {
  '& .home-section': {
    marginTop: 20,
    marginBottom: 15,

    [media.greaterThan('medium')]: {
      marginTop: 60,
      marginBottom: 65,
    },
  },

  '& .home-section:first-child': {
    [media.lessThan('medium')]: {
      marginTop: 0,
      marginBottom: 0,
      paddingTop: 30,
      WebkitOverflowScrolling: 'touch',
      position: 'relative',
      maskImage:
        'linear-gradient(to right, transparent, white 10px, white 90%, transparent)',
    },
  },

  '& .homeDivider': {
    height: 1,
    marginBottom: -1,
    border: 'none',
    borderBottom: `1 solid ${colors.divider}`,
  },

  '& .marketing-row': {
    display: 'flex',
    flexDirection: 'row',

    [media.lessThan('small')]: {
      textAlign: 'center',
      paddingLeft: '0px !important',
    },

    [media.lessThan('medium')]: {
      paddingLeft: 10,
      flexDirection: 'column',
      whiteSpace: 'nowrap',
    },
  },

  '& .marketing-col': {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 1 33%',
    marginLeft: 40,

    '&:first-of-type': {
      marginLeft: 0,

      [media.lessThan('medium')]: {
        marginLeft: 10,
      },
    },

    [media.lessThan('small')]: {
      width: 'inherit !important',
    },

    [media.lessThan('medium')]: {
      display: 'inline-block',
      verticalAlign: 'top',
      marginLeft: 0,
      whiteSpace: 'normal',
      width: '75%',
      marginRight: 20,
      paddingBottom: 40,

      '&:first-of-type': {
        marginTop: 0,
      },
    },

    '& h3': {
      color: colors.subtle,
      paddingTop: 0,
      fontWeight: 300,
      fontSize: 20,

      [media.greaterThan('xlarge')]: {
        fontSize: 24,
        fontWeight: 200,
      },
    },

    '& p': {
      lineHeight: 1.7,
    },

    '& h3 + p': {
      marginTop: 20,
    },
  },

  '& .example': {
    marginTop: 40,

    '&:first-child': {
      marginTop: 0,
    },

    [media.greaterThan('xlarge')]: {
      marginTop: 80,
    },
  },
};
