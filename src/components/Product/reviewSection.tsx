import React from "react";
import styles from "./reviewSection.module.css";
import { reviews } from "../../data/reviews";
import {
  FaStar,
  FaThumbsUp,
  FaThumbsDown,
  FaPen,
  FaReply,
} from "react-icons/fa";

interface ReviewsSectionProps {
  productId: string;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ productId }) => {
  const productReviews = reviews.filter((r) => r.productId === productId);

  if (productReviews.length === 0) return null;

  const totalReviews = productReviews.length;
  const ratingAvg = (
    productReviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews
  ).toFixed(1);

  const breakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: productReviews.filter((r) => r.rating === star).length,
  }));

  return (
    <section className={styles.wrapper}>
      <h2>Reviews</h2>
      <div className={styles.grid}>
        <div className={styles.overview}>
          <div className={styles.score}>{ratingAvg}</div>
          <div className={styles.stars}>
            {Array.from({ length: Math.round(+ratingAvg) }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <div className={styles.total}>{totalReviews} reviews</div>
        </div>

        <div className={styles.bars}>
          {breakdown.map(({ star, count }) => (
            <div className={styles.barRow} key={star}>
              <span>
                {star} <FaStar />
              </span>
              <div className={styles.bar}>
                <div
                  className={styles.fill}
                  style={{ width: `${(count / totalReviews) * 100}%` }}
                ></div>
              </div>
              <span>{count}</span>
            </div>
          ))}
        </div>

        <button className={styles.reviewBtn}>
          <FaPen /> Leave a review
        </button>
      </div>

      <div className={styles.list}>
        {productReviews.map((review) => (
          <div className={styles.review} key={review.id}>
            <div className={styles.header}>
              <strong>{review.user}</strong>
              <span className={styles.date}>
                {new Date(review.date).toDateString()}
              </span>
            </div>
            <div className={styles.stars}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className={styles.product}>{review.productId}</div>
            <p>
              <strong>Pros:</strong> {review.pros}
            </p>
            <p>
              <strong>Cons:</strong> {review.cons}
            </p>
            <div className={styles.actions}>
              <button>
                <FaReply /> Reply
              </button>
              <span>
                <FaThumbsUp /> {review.likes}
              </span>
              <span>
                <FaThumbsDown /> {review.dislikes}
              </span>
            </div>
          </div>
        ))}
        <a href="#" className={styles.showAll}>
          Show all reviews →
        </a>
      </div>
    </section>
  );
};

export default ReviewsSection;
