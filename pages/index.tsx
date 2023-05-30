import Head from "next/head";
import Image from "next/image";
import { Mulish } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import LandingNewsSummary from "@/components/LandingNewsSummary";
import Button from "@/components/Buttons/Button";
import LatestPostNewsSummary from "@/components/LatesPostNewsSummary";
import { postGallery } from "@/utils/util";

const mulish = Mulish({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div>
      <div className={`${styles.LandingTop} ${mulish.className}`}>
        <div className="container overflow-hidden">
          <div className="row gx-4">
            <div className={`${styles.LeftContainer} col-6`}>
              <p>
                Innovation <span>2 Hours ago</span>
              </p>
              <h1 className={styles.LeftBoldTexts}>
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </h1>
            </div>
            <div className={`${styles.RightContainer} col-6`}>
              <div className={styles.RightMainCard}>
                <h4 className="mb-3">Popular this week</h4>

                <LandingNewsSummary />
                <LandingNewsSummary />
                <LandingNewsSummary />
                <LandingNewsSummary />
                <LandingNewsSummary />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.LatestPostContainer}>
        <div className={styles.Header}>
          <h4>Our Latest Post</h4>
          <Button
            text="View All"
            backgroundColor="#F36326"
            textColor="#ffffff"
          />
        </div>
        <div className={styles.PostList}>
          {postGallery.map((item, index) => (
            <LatestPostNewsSummary
              key={index}
              tag={item?.tag}
              imageUrl={item?.url}
            />
          ))}
        </div>
      </div>

      <div className={styles.SubscribeContainer}>
        <div className={styles.SubscribeCard}>
          <div className="container overflow-hidden p-0">
            <div className="row gx-5">
              <div className={`${styles.LeftContainer} col-6`}>
                <h1>Sign Up for Our Newsletters</h1>
              </div>
              <div className={`${styles.RightContainer} col-6`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.SubscribeActionContainer}>
            <input type="text" placeholder="Input your email address here" />
            <Button
              text="Subscribe Now"
              textColor="#ffffff"
              backgroundColor="#F36326"
            />
          </div>
        </div>
      </div>

      <div className={styles.FooterContainer}>
        <div className="container overflow-hidden p-0">
          <div className="row gx-5">
            <div className={`${styles.LeftContainer} col-6`}>
              <Image
                src="/images/jake-blue.svg"
                height={40}
                width={40}
                alt="logo"
              />
              <div className={styles.TextContainer}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod.
                </p>
              </div>
            </div>
            <div className={`${styles.RightContainer} col-6`}>
              <div className="container overflow-hidden p-0">
                <div className="row gy-5">
                  <div className={`${styles.ColumnOne} col-4`}>
                    <ul>
                      <li>
                        <h6>Categories</h6>
                      </li>
                      <li>International</li>
                      <li>Regional</li>
                      <li>Politics</li>
                      <li>Business</li>
                      <li>Sports</li>
                      <li>Health</li>
                    </ul>
                  </div>
                  <div className={`${styles.ColumnTwo} col-4`}>
                    <ul>
                      <li>
                        <h6>Company</h6>
                      </li>
                      <li>About Us</li>
                      <li>Careers</li>
                      <li>Privacy Policy</li>
                      <li>Terms of Services</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                  <div className={`${styles.ColumnThree} col-4`}>
                    <ul>
                      <li>
                        <h6>Social Media</h6>
                      </li>
                      <li>Youtube</li>
                      <li>Instagram</li>
                      <li>Facebook</li>
                      <li>Twitter</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
