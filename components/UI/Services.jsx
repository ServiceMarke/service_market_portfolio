import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Real Estate Management" icon="ri-home-4-fill" />

                <ServicesItem title="E-commerce (Online Store)" icon="ri-shopping-cart-2-line" />
              </div>

              <ServicesItem
                title="IT Solution"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What We do" />
            <h3 className="mb-0 mt-4">Connect Users With ,</h3> 
            <h3 className="mb-4"> A Wide Range Of Service Providers</h3>
            <p>
            ServiceMarket is a comprehensive platform designed to connect users with a wide range of service providers,
             both blue-collar and white-collar, covering every aspect of daily life. 
             From skilled laborers for construction and maintenance tasks to certified professionals in fields like consulting, 
             finance, and technology, our platform offers it all under one roof.
              Our commitment to excellence and convenience sets us apart,
               ensuring that users can discover, book, and request services from
                over 500 different premium service providers with zero hassle.


            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
