import React from 'react';
import Loader from 'react-loader-spinner';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { CgMenuRight } from 'react-icons/cg';
import { AiFillDelete, AiFillPlusCircle } from 'react-icons/ai';
import { BsSearch, BsRecordCircleFill } from 'react-icons/bs';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './style.css';

const OtherTaskScreen = ({ handleChange, paneDidMount, contacts, loading }) => {
  return (
    <>
      <Container>
        <Row justify='space-between' gutter={[25, 5]}>
          <Col style={{ height: '100vh' }} xs={12} sm={12} md={12} lg={3}>
            <div className='sideBarContainer'>
              <div>
                <div className='headerBar'>
                  <div className='contentFlex'>
                    <CgMenuRight size={22} />
                    <div className='audienceHeading'>Audience</div>
                  </div>
                  <div className='totalContacts'>{contacts?.totalCounts} Contacts</div>
                </div>
                <div className='subHeading'>Include Tags:</div>
                <div className='tagsContainer'>
                  <div className='tagsFlex'>
                    <div>Greetings</div>
                    <div></div>
                  </div>
                  <div className='tagsFlex tabsBackground'>
                    <div>Greetings</div>
                    <div>
                      <Form className='styledCheckbox'>
                        <Form.Group id='formGridCheckbox'>
                          <Form.Check type='checkbox' />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                  <div className='tagsFlex'>
                    <div>Greetings</div>
                    <div></div>
                  </div>
                  <div className='tagsFlex selected'>
                    <div>Greetings</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <AiFillDelete style={{ marginRight: 10 }} color='red' />
                      <Form className='styledCheckbox'>
                        <Form.Group id='formGridCheckbox'>
                          <Form.Check type='checkbox' />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                </div>
                <div className='subHeading'>Exclude Tags:</div>
                <div className='tagsContainer'>
                  <div className='tagsFlex'>
                    <div>Greetings</div>
                    <div></div>
                  </div>
                  <div className='tagsFlex tabsBackground'>
                    <div>Greetings</div>
                    <div>
                      <Form className='styledCheckbox'>
                        <Form.Group id='formGridCheckbox'>
                          <Form.Check type='checkbox' />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                  <div className='tagsFlex'>
                    <div>Greetings</div>
                    <div></div>
                  </div>
                  <div className='tagsFlex tabsBackground'>
                    <div>Greetings</div>
                    <div>
                      <Form className='styledCheckbox'>
                        <Form.Group id='formGridCheckbox'>
                          <Form.Check type='checkbox' />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                </div>
                <div className='subHeading'>Message Sent:</div>
                <div className='headerBar'>
                  <div className='minimunContainer'>Min</div>
                  <div className='minimunContainer'>Max</div>
                </div>
                <div className='subHeading'>Message Received:</div>
                <div className='headerBar'>
                  <div className='minimunContainer'>Min</div>
                  <div className='minimunContainer'>Max</div>
                </div>
              </div>

              <button className='saveBtn' href='#'>
                Save Filters
              </button>
            </div>
          </Col>
          <Col style={{ height: '100vh' }} xs={12} sm={12} md={12} lg={9}>
            <div className='headerBarContacts'>
              <div className='audienceHeading'>All Contacts {contacts?.totalCounts}</div>
              <div>
                <AiFillPlusCircle color='#09A391' size={25} />
              </div>
            </div>
            <div className='searchBar'>
              <BsSearch size={20} color='#B4C0D3' />
              <input
                type='text'
                onChange={(e) => handleChange(e)}
                className='searchInput'
                placeholder='Search contacts'
              />
            </div>
            <div className='selectAllBar'>
              <div className='contentFlex'>
                <Form className='styledGreyCheckbox'>
                  <Form.Group id='formGridCheckbox'>
                    <Form.Check type='checkbox' />
                  </Form.Group>
                </Form>
                <div className='selectHeading'>Select All</div>
              </div>
              <button href='#' className='exportBtn'>
                Export All
              </button>
            </div>
            <div className='scrollAbleContent' ref={paneDidMount}>
              {contacts?.contacts?.map((item) => (
                <Row className='contactRowStyle' key={item.id}>
                  <Col style={{}} xs={2} sm={1} md={1} lg={1}>
                    <Form className='styledGreyCheckbox'>
                      <Form.Group id='formGridCheckbox'>
                        <Form.Check type='checkbox' />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col className='borderBottom' style={{}} xs={5} sm={5} md={5} lg={5}>
                    <div className='contentFlex'>
                      <img
                        className='userImage'
                        alt=''
                        src={
                          'https://pbs.twimg.com/profile_images/1276168382023229440/H99BdKOh_400x400.jpg'
                        }
                      />
                      <div>
                        <div className='userName'>{item.name}</div>
                        <div className='userContact'>{item.phoneNumber}</div>
                      </div>
                    </div>
                  </Col>
                  <Col className='addBtnContent' style={{}} xs={5} sm={6} md={6} lg={6}>
                    <div className='tagBtn'>
                      <div className='tagsText'>
                        <list>
                          {item.tags.map((tag, index) => (
                            <li key={index}>{tag.name}</li>
                          ))}
                        </list>
                      </div>
                      <BsRecordCircleFill size={10} color='#fff' opacity={0.8} />
                    </div>
                    <AiFillPlusCircle color='#09A391' size={25} />
                  </Col>
                </Row>
              ))}
              {loading ? (
                <Loader type='ThreeDots' margin-left='20%' color='grey' height={80} width={80} />
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OtherTaskScreen;
