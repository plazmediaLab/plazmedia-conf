<?php include_once './includes/templates/header.php'; ?>

    <section class="seccion contenedor">
        <h2>La mejor conferencia de diseño web en español</h2>
        <p>Pobcaecati est dolor officia itaque assumenda aliquam non fugiat officiis iste eligendi aliquid dolorem ipsam laboriosam ex impedit beatae! Nobis, unde sequi molestiae porro, eveniet voluptates totam at consequuntur nulla reiciendis, dolore quisquam error obcaecati deserunt autem!</p>
    </section><!-- sección -->

    <section class="programa">
        <div class="contenedor-video">
            <video autoplay loop poster="./img/bg-talleres.jpg">
                <source src="videos/video.mp4" type="video/mp4">
                <source src="videos/video.webm" type="video/webm">
                <source src="videos/video.ogv" type="video/ogv">
            </video>
        </div><!-- Cierre Video -->

        <div class="contenido-programa">
            <div class="contenedor">
                <div class="programa-evento clearfix">
                    <h2>Programa del evento</h2>
                    <nav class="menu-programa">
                        <a href="#talleres"><i class="fas fa-code"></i> Talleres</a>
                        <a href="#conferencias"><i class="fas fa-comment"></i> Conferencias</a>
                        <a href="#seminarios"><i class="fas fa-university"></i> Seminarios</a>
                    </nav><!-- Navegación -->

                    <div id="talleres" class="talleres info-curso hide">
                        <div class="detalle-evento">
                            <h3>HTML5, CSS3 y JavaScriot</h3>
                            <p><i class="fas fa-university"></i> 16:00 hrs</p>
                            <p><i class="fas fa-calendar"></i> 10 de Dic.</p>
                            <p><i class="fas fa-user"></i> Adrian Nieves Uribe SEC & Brand Manager</p>
                        </div><!-- Evento 1 -->
                        <div class="detalle-evento">
                            <h3>Responsive Web Design</h3>
                            <p><i class="fas fa-university"></i> 20:00 hrs</p>
                            <p><i class="fas fa-calendar"></i> 10 de Dic.</p>
                            <p><i class="fas fa-user"></i> Juan Pablo de la Torre Valdez</p>
                        </div><!-- Evento 2 -->
                        <a href="registro.php" class="boton float-right">Ver todos</a>
                    </div><!-- Cierre Talleres -->
                    <div id="conferencias" class="talleres info-curso hide">
                        <div class="detalle-evento">
                            <h3>Como ser Freelancer</h3>
                            <p><i class="fas fa-university"></i> 10:00 hrs</p>
                            <p><i class="fas fa-calendar"></i> 10 de Dic.</p>
                            <p><i class="fas fa-user"></i> Christian Nieves Uribe</p>
                        </div><!-- Evento 1 -->
                        <div class="detalle-evento">
                            <h3>Tecnologías del Futuro</h3>
                            <p><i class="fas fa-university"></i> 17:00 hrs</p>
                            <p><i class="fas fa-calendar"></i> 10 de Dic.</p>
                            <p><i class="fas fa-user"></i> Mark Zuckerberg</p>
                        </div><!-- Evento 2 -->
                        <a href="registro.php" class="boton float-right">Ver todos</a>
                    </div><!-- Cierre Conferencias -->
                    <div id="seminarios" class="talleres info-curso hide">
                        <div class="detalle-evento">
                            <h3>Diseño UI/UX para Móviles</h3>
                            <p><i class="fas fa-university"></i> 16:00 hrs</p>
                            <p><i class="fas fa-calendar"></i> 10 de Dic.</p>
                            <p><i class="fas fa-user"></i> Adrian Nieves Uribe SEC & Brand Manager</p>
                        </div><!-- Evento 1 -->
                        <div class="detalle-evento">
                            <h3>Aprende a programar en una mañana</h3>
                            <p><i class="fas fa-university"></i> 20:00 hrs</p>
                            <p><i class="fas fa-calendar"></i> 10 de Dic.</p>
                            <p><i class="fas fa-user"></i> Juan Pablo de la Torre Valdez</p>
                        </div><!-- Evento 2 -->
                        <a href="registro.php" class="boton float-right">Ver todos</a>
                    </div><!-- Cierre Semiinarios -->
                        

                </div><!-- Cierre Programa-Eventos -->
            </div><!-- Cierre Contenedor -->
        </div><!-- Contenido Programa -->
    </section><!-- Prograna -->

    <section class="invitados contenedor seccion">
        <h2>Nuestros invitados</h2>

        <ul class="lista-invitados clearfix">
            <li>
                <div class="invitado">
                    <img src="img/invitado1.jpg" alt="Imagen Invitado">
                    <p>Rafael Bautista</p>
                </div>
            </li><!-- Invitado 1 -->
            <li>
                <div class="invitado">
                    <img src="img/invitado2.jpg" alt="Imagen Invitado">
                    <p>Shari Herrera</p>
                </div>
            </li><!-- Invitado 2 -->
            <li>
                <div class="invitado">
                    <img src="img/invitado3.jpg" alt="Imagen Invitado">
                    <p>Gregorio Sanchez</p>
                </div>
            </li><!-- Invitado 3 -->
            <li>
                <div class="invitado">
                    <img src="img/invitado4.jpg" alt="Imagen Invitado">
                    <p>Susana Rivera</p>
                </div>
            </li><!-- Invitado 4 -->
            <li>
                <div class="invitado">
                    <img src="img/invitado5.jpg" alt="Imagen Invitado">
                    <p>Harold Garcia</p>
                </div>
            </li><!-- Invitado 5 -->
            <li>
                <div class="invitado">
                    <img src="img/invitado6.jpg" alt="Imagen Invitado">
                    <p>Susan Sanchez</p>
                </div>
            </li><!-- Invitado 6 -->
        </ul><!-- Cierre Lista-Invitados -->
    </section><!-- Cierre Invitados -->

    <div class="contador parallax">
        <div class="contenedor">
            <ul class="resumen-evento clearfix">
                <li><p class="numero"></p> Invitados</li>
                <li><p class="numero"></p> Talleres</li>
                <li><p class="numero"></p> Días</li>
                <li><p class="numero"></p> Conferencias</li>
            </ul>
        </div>
    </div><!-- Cierre Pallarax -->

    <section class="precios seccion">
        <h2>Precios</h2>
        <div class="contenedor">
            <ul class="lista-precios clearfix">
                <li>
                    <div class="tabla-precio">
                        <h3>Pase por día</h3>
                        <p class="numero">$30</p>
                        <ul>
                            <li><i class="far fa-check-circle font-awesome"></i> Bocadillos Gratis</li>
                            <li><i class="far fa-check-circle font-awesome"></i> Todas las Conferencias</li>
                            <li><i class="far fa-check-circle font-awesome"></i> Todos los Talleres</li>
                        </ul>
                        <a href="registro.php" class="boton hollow">Comprar</a>
                    </div>
                </li><!-- Item 1 -->
                <li>
                    <div class="tabla-precio">
                        <h3>Todos los días</h3>
                        <p class="numero">$50</p>
                        <ul>
                            <li><i class="far fa-check-circle font-awesome"></i> Bocadillos Gratis</li>
                            <li><i class="far fa-check-circle font-awesome"></i> Todas las Conferencias</li>
                            <li><i class="far fa-check-circle font-awesome"></i> Todos los Talleres</li>
                        </ul>
                        <a href="registro.php" class="boton">Comprar</a>
                    </div>
                </li><!-- Item 2 -->
                <li>
                    <div class="tabla-precio">
                        <h3>Pase por 2 días</h3>
                        <p class="numero">$45</p>
                        <ul>
                            <li><i class="far fa-check-circle font-awesome"></i> Bocadillos Gratis</li>
                            <li><i class="far fa-check-circle font-awesome"></i> Todas las Conferencias</li>
                            <li><i class="far fa-check-circle font-awesome"></i> Todos los Talleres</li>
                        </ul>
                        <a href="registro.php" class="boton hollow">Comprar</a>
                    </div>
                </li><!-- Item 3 -->
            </ul>
        </div><!-- Cierre Contenedor -->
    </section><!-- Cierre Precios-Seccion -->

    <div id="mapa" class="mapa">

    </div><!-- Cierre Mapa -->

    <section class="seccion">
        <h2>Testimoliales</h2>
        <div class="testimoniales contenedor clearfix">
            <div class="testimonial">
                <blockquote>
                    <p>Consectetur adipisicing elit, enim est repellat dolore iste debitis tempore obcaecati culpa sit corporis laboriosam amet perferendis minus nemo! Minima praesentium cumque sint delectus.</p>
                    <footer class="info-testimonial clearfix">
                        <img src="img/testimonial.jpg" alt="Imagen Testimonial">
                        <cite>Oswaldo Aponte Escobedo <span>Diseñador en @puntowebs</span></cite>
                    </footer>
                </blockquote>
            </div><!-- Cierre Testimonial 1 -->
            <div class="testimonial">
                <blockquote>
                    <p>Consectetur adipisicing elit, enim est repellat dolore iste debitis tempore obcaecati culpa sit corporis laboriosam amet perferendis minus nemo! Minima praesentium cumque sint delectus.</p>
                    <footer class="info-testimonial clearfix">
                        <img src="img/testimonial.jpg" alt="Imagen Testimonial">
                        <cite>Oswaldo Aponte Escobedo <span>Diseñador en @puntowebs</span></cite>
                    </footer>
                </blockquote>
            </div><!-- Cierre Testimonial 2 -->
            <div class="testimonial">
                <blockquote>
                    <p>Consectetur adipisicing elit, enim est repellat dolore iste debitis tempore obcaecati culpa sit corporis laboriosam amet perferendis minus nemo! Minima praesentium cumque sint delectus.</p>
                    <footer class="info-testimonial clearfix">
                        <img src="img/testimonial.jpg" alt="Imagen Testimonial">
                        <cite>Oswaldo Aponte Escobedo <span>Diseñador en @puntowebs</span></cite>
                    </footer>
                </blockquote>
            </div><!-- Cierre Testimonial 3 -->
        </div><!-- Cierre Testimoniales -->
    </section><!-- Cierre Sección Testimonial -->

    <div class="newsletter parallax">
        <div class="contenido contenedor">
            <p>Regístrate al newsletter</p>
            <h3>Plazmedia <span>CAMP</span></h3>
            <a href="registro.php" class="boton transparente">Registro</a>
        </div>
    </div><!-- Cierre Parallax -->

    <section class="seccion">
        <h2>Faltan</h2>
        <div class="cuenta-regresiva contenedor">
            <ul class="clearfix">
                <li><p id="dias"  class="numero"></p> Días</li>
                <li><p id="horas"  class="numero"></p> Horas</li>
                <li><p id="minutos"  class="numero"></p> Minutos</li>
                <li><p id="segundos"  class="numero"></p> Degundos</li>
            </ul>
        </div>
    </section><!-- Cierre Cuenta-Regresiva -->


<?php include_once './includes/templates/footer.php'; ?>    