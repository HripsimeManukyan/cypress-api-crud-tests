describe('GoRest Users API – Cypress Request Portfolio Demo', () => {
    let createdUserId = null;

    it('GET /users - validate list', () => {
        cy.request('/users').then((resp) => {
            expect(resp.status).to.eq(200);
            expect(resp.body).to.be.an('array');
            expect(resp.body.length).to.be.greaterThan(0);
        });
    });

    it('POST /users - create user (valid data)', function () {
        cy.fixture('user').then((user) => {
            user.email = `portfolio_${Date.now()}@example.com`;

            cy.gorestAuthHeaders().then((headers) => {
                cy.request({
                    method: 'POST',
                    url: '/users',
                    headers,
                    body: user,
                    failOnStatusCode: false,
                }).then((resp) => {
                    expect(resp.status).to.eq(201);
                    expect(resp.body).to.have.property('id');
                    expect(resp.body).to.have.property('email', user.email);
                    createdUserId = resp.body.id;
                });
            });
        });
    });

    it('POST /users - should fail with invalid email', () => {
        cy.gorestAuthHeaders().then((headers) => {
            cy.request({
                method: 'POST',
                url: '/users',
                headers,
                body: {
                    name: 'Invalid User',
                    gender: 'male',
                    email: 'not-an-email',
                    status: 'active'
                },
                failOnStatusCode: false
            }).then((resp) => {
                expect(resp.status).to.eq(422);
                expect(resp.body[0]).to.have.property('field', 'email');
            });
        });
    });

    it('PUT /users/:id - update created user', function () {
        cy.gorestAuthHeaders().then((headers) => {
            cy.request({
                method: 'PUT',
                url: `/users/${createdUserId}`,
                headers,
                body: { name: 'Updated Portfolio User' }
            }).then((resp) => {
                expect(resp.status).to.eq(200);
                expect(resp.body.name).to.eq('Updated Portfolio User');
            });
        });
    });

    it('DELETE /users/:id - delete created user', function () {
        cy.gorestAuthHeaders().then((headers) => {
            cy.request({
                method: 'DELETE',
                url: `/users/${createdUserId}`,
                headers
            }).then((resp) => {
                expect(resp.status).to.eq(204);
            });
        });
    });

    it('DELETE /users/:id - 404 for already deleted user', function () {
        cy.gorestAuthHeaders().then((headers) => {
            cy.request({
                method: 'DELETE',
                url: `/users/${createdUserId}`,
                headers,
                failOnStatusCode: false
            }).then((resp) => {
                expect(resp.status).to.eq(404);
            });
        });
    });

    it('GET /users - validate the response', () => {
        cy.request('/users').then((resp) => {
            expect(resp.status).to.eq(200);
        });
    });
});