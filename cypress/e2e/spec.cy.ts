/// <reference types="cypress" />

describe('Pages should open', () => {
  it('About link should open', () => {
    cy.visit('/');
    cy.get('.header__navigation .nav-link').contains('About').click();

    cy.url().should('include', '/about');
    cy.get('.wrapper').contains('About Us page');
  });
  it('404 link should open', () => {
    cy.visit('/not/found');

    cy.get('.wrapper').contains('Page not found');
  });
  it('Form link should open', () => {
    cy.visit('/');
    cy.get('.header__navigation .nav-link').contains('Form').click();

    cy.url().should('include', '/form');
    cy.get('.wrapper').contains('Form page');
  });
  it('Main link should open', () => {
    cy.visit('/');
    cy.get('.header__navigation .nav-link').contains('Main').click();

    cy.get('.wrapper').contains('Main page');
  });

  it('Search should find cards', () => {
    cy.visit('/');

    cy.get('.search-input').type('samsung');
    cy.get('.search__btn').click();
    cy.get('.min-card-vitrine').first().contains('Brand: Samsung');

    cy.get('.search-input').clear();
    cy.get('.search__btn').click();
    cy.get('.min-card-vitrine').first().contains('Brand: Apple');
  });

  it('Search should not find cards', () => {
    cy.visit('/');

    cy.get('.search-input').type('33dkhsa').type('Cypress.io{enter}');
    cy.get('.products-message').contains('Products not found');
  });

  it('Modal should open and close', () => {
    cy.visit('/');

    cy.get('.min-card-vitrine').first().click();

    cy.get('.modal-overlay').contains('Add to cart');
    cy.get('.modal__close').should('exist');

    cy.get('.modal__close').click();
    cy.get('.modal-overlay').should('not.exist');
  });

  it('User should create', () => {
    cy.visit('/form');

    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="userName"]').type('TestName');
    cy.get('input[name="birthday"]').type('2000-05-12');
    cy.get('.reg-select').select('Canada');
    cy.get('input[type="file"]').selectFile({
      contents: Cypress.Buffer.from('test'),
      fileName: 'test.jps',
      lastModified: Date.now(),
    });
    cy.get('input[id="male"]').click();
    cy.get('input[name="agree"]').click();
    cy.get('[type="submit"]').click();

    cy.get('.reg-form__message').should('exist');
    cy.get('.user-card-vitrine').contains('test@test.com');
    cy.get('.user-card-vitrine').contains('TestName');
  });

  it('User should not create', () => {
    cy.visit('/form');
    cy.get('input[name="birthday"]').type('2022-05-12');
    cy.get('[type="submit"]').click();

    cy.get('.input__error-message').should('exist');
  });
  it('Does not do much', () => {
    expect(true).to.equal(true);
  });
});
