import { CocheraContext } from "../../Context/CocheraContext";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardNumberElement,
  Elements,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { pagoService } from "../../service/pagosService";
import { Pedido } from "../../service/pedidosService";
import { putCocheras } from "../../service/cocherasServices";
import swal from "sweetalert";
import CircularProgress from "@mui/material/CircularProgress";
import { Pipeline} from "ambient-cbg";
import "./index.css";
import { useParams } from "react-router-dom";

const CheckoutForm = ({ values, idLink, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  console.log(values)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const valuesSpaces = JSON.parse(localStorage.getItem("valuesSpace"));

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(
        CardNumberElement,
        CardExpiryElement,
        CardCvcElement
      ),
    });
    setLoading(!loading);
    if (!error) {
      const { id } = paymentMethod;
      
      const pe = await Pedido(values);
      console.log(pe);
      const pedido = {
        id,
        amout: +price + 180,
        cliente: values.cliente,
        pedidoId: pe.id,
      };
      try {
        const pago = await pagoService(pedido);
        if (pago.messageError) {
          swal({
            icon: "error",
            title: pago.messageError,
          });
        } else {
          try {
            await putCocheras(+idLink, valuesSpaces);
            await swal({
              icon: "success",
              title: "Se reservo su cochera",
            });
          } catch (error) {
            swal({
              icon: "error",
              title: error,
            });
          }
        }
      } catch (error) {
        swal({
          icon: "error",
          title: error,
        });
      }
      setLoading(loading);
      elements.getElement(CardNumberElement).clear();
      elements.getElement(CardExpiryElement).clear();
      elements.getElement(CardCvcElement).clear();
      history(-2);
    } else {
      swal({
        icon: "error",
        title: error,
      });
    }
  };
  const handleClick = () => {
    history(-1);
  };
  return (
    <form onSubmit={handleSubmit} style={{ paddingTop: "30px" }}>
      <ul className="form-list">
        <li className="form-list-row">
          <div className="user">
            <label>Nombre</label>
            <br />
            <i className="fas fa-user"></i>
            <input type="text" required />
          </div>
        </li>
        <li className="form-list-row frm1">
          <label className="label-Input">Numero de tarjeta</label>
          <br />
          <div
            className="number"
            style={{ display: "flex", paddingBottom: "4px" }}
          >
            <i
              className="far fa-credit-card"
              style={{ marginRight: "9px" }}
            ></i>
            <CardNumberElement />
          </div>
        </li>
        <li
          className="form-list-row clearfix"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="date frm2">
            <label style={{ marginBottom: "9px" }}>Fecha de caducidad</label>
            <br />
            <CardExpiryElement />
          </div>
          <div className="cvc frm2">
            <label style={{ marginBottom: "9px" }}>CVC</label>
            <i className="fas fa-question-circle"></i>
            <br />
            <CardCvcElement />
          </div>
        </li>
      </ul>
      <button disabled={!stripe}>
        {loading ? <CircularProgress color="secondary" size={20} /> : "Pagar"}
      </button>
      <button style={{ marginLeft: "40%" }} onClick={handleClick}>
        Regresar
      </button>
    </form>
  );
};
const PagePedido = () => {
  const [idx, setIndx] = useState(0);
  const { value } = useContext(CocheraContext);
  const { id } = useParams();

  const stripePromise = loadStripe(
    "pk_test_51LEFN3LVZi032wxl8JobvtLN3GIzzSx2pTJRP2HUZquz7slxU1pwp3WeNaEjYZKI6wIeepLnGy9bniRZLxkSTH4200Zlc26JKO"
  );
  const cocheraInfo = JSON.parse(localStorage.getItem("cochera"));
  const imagesSlide = [
    {
      url: cocheraInfo[0].imagen1,
    },
    {
      url: cocheraInfo[0].imagen2,
    },
    {
      url: cocheraInfo[0].imagen3,
    },
  ];
  useEffect(() => {
    setInterval(() => {
      if (idx <= imagesSlide.length) {
        setIndx((prevCount) =>
          prevCount < imagesSlide.length - 1 ? prevCount + 1 : 0
        );
      }
    }, 10000);
  }, []);

  return (
    <div>
      <Pipeline />
      <div className="modalPedido clearfix">
        <div className="modalPedido-product">
          <div className="product">
            <div className="product-slideshow">
              {imagesSlide.map((image, index) => (
                <div
                  className="productSlides fade"
                  style={{
                    display: `${idx === index ? "block" : "none"}`,
                    opacity: `${idx === index ? 1 : 0}`,
                  }}
                  key={index}
                >
                  <img
                    src={image.url}
                    style={{
                      width: "100%",
                      height: "250px",
                      borderRadius: "40%",
                    }}
                    alt="img"
                  />
                </div>
              ))}
              <br />

              <div style={{ textAlign: "center" }}>
                {imagesSlide.map((image, index) => (
                  <span
                    className={`dot ${idx === index ? "active" : ""}`}
                    onClick={() => setIndx(index)}
                    key={index}
                  ></span>
                ))}
              </div>
            </div>

            <h1 className="product-name">
              {cocheraInfo[0].country} {cocheraInfo[0].department} <br />
              {cocheraInfo[0].name} <br />
              {cocheraInfo[0].adress}
            </h1>
            <p className="product-code-name">Espacio alquilado 1</p>
            <p className="product-price">Precio : ${cocheraInfo[0].price}</p>
          </div>

          <div className="round-shape"></div>
        </div>
        <div className="modalPedido-info">
          <div className="info">
            <h2>Informacion de pago</h2>
            <Elements stripe={stripePromise}>
              <CheckoutForm
                values={value}
                idLink={id}
                price={cocheraInfo[0].price}
              />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PagePedido;
